import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import bombImg from "../assets/bomb.png";
import catImg from "../assets/cat.png";
import defuseImg from "../assets/defuse.png";
import shuffleImg from "../assets/shuffle.png";
import GameFaq from "./faq";
import card from "../assets/card.png";
import { Button } from "@/components/ui/button";

const initialDeck = [catImg, defuseImg, shuffleImg, bombImg];
const port = "https://go-cat.onrender.com";
const hello = () => {
  let newDeck = [];
  for (let i = 0; i < 5; i++) {
    let randomIndex = Math.floor(Math.random() * initialDeck.length);
    newDeck.push(initialDeck[randomIndex]);
  }
  return newDeck;
};

const CardGame = () => {
  const [deck, setDeck] = useState(hello());
  const [initial, setInitial] = useState([card, card, card, card, card]);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("");
  const [remainingCards, setRemainingCards] = useState(5);
  const [drawnCard, setDrawnCard] = useState(null);
  const [defuse, setDefuse] = useState(0);
  const [disableDraw, setDisableDraw] = useState(false);
  const [score1, setScore1] = useState(0);
  const [userData, setUserData] = useState(null);
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!user) return; // Check if user is null
        const response = await fetch(`${port}/user/${user.sub}`);
        const responseData = await response.json(); // Parse JSON response
        if (response.ok) {
          setUserData(responseData);
          setScore1(responseData.score);
        } else {
          console.error("Failed to fetch user data:", responseData.error);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (isAuthenticated && user && !isLoading && !userData) {
      fetchUserData();
    }
  }, [isAuthenticated, user, isLoading, userData]);
  const increaseScore = async () => {
    try {
      const response = await fetch(`${port}/user/incr?sub=${user.sub}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // No need to include a body for a GET request
      });
      const responseData = await response.json();
      if (response.ok) {
        console.log("Score increased successfully:", responseData);
        // Assuming responseData contains the updated score
        setScore1(responseData.newScore);
      } else {
        console.error("Failed to increase score:", responseData.error);
      }
    } catch (error) {
      console.error("Error increasing score:", error);
    }
  };

  const restartGame = () => {
    setInitial([card, card, card, card, card]); // Reset initial to initial1
    setDeck(hello());
    setGameOver(false);
    setMessage("");
    setRemainingCards(5);
    setDrawnCard(null); // Reset drawn card state
    setDefuse(0);
  };

  const drawCard = () => {
    if (deck.length === 0) {
      setMessage("Congratulations! You have drawn all cards.");
      setGameOver(true);
      increaseScore();
      return;
    }

    const randomIndex = Math.floor(Math.random() * deck.length);
    const card = deck[randomIndex];
    initial.shift();

    setDrawnCard(card);
    const updatedDeck = deck.filter((_, index) => index !== randomIndex);
    setDeck(updatedDeck);
    setRemainingCards(remainingCards - 1);

    if (card === bombImg) {
      if (defuse > 0) {
        setDefuse(defuse - 1);
        setMessage("You drew an Exploding Kitten! You defused it.");
      } else {
        setMessage("You drew an Exploding Kitten! Game Over.");
        setGameOver(true);
      }
    } else if (card === shuffleImg) {
      setMessage("You drew a Shuffle card! Game Restarting in 3 Seconds.");
      setDisableDraw(true);
      setTimeout(() => {
        setDisableDraw(false);
        restartGame();
      }, 3000);
    } else if (card === defuseImg) {
      setDefuse(defuse + 1);
      setMessage("You drew a Defuse card! Continue playing.");
    } else {
      setMessage("You drew a Cat card! Continue playing.");
    }

    if (updatedDeck.length === 0) {
      setMessage("Congratulations! You have drawn all cards.");
      setGameOver(true);
      increaseScore();
    }
  };

  return (
    <>
      <div className="container text-center bg-gradient-to-br from-orange-100 to-orange-50 p-8 rounded-lg shadow-lg w-full">
        <div className="relative">
          <p className="absolute top-0 right-0 bg-green-50 text-black px-4 py-2 rounded-full shadow-md">
            <span className="text-blue-500 font-medium">
              @{userData && userData.nickname ? userData.nickname : user.name}
            </span>{" "}
            Score:
            {score1}
          </p>
        </div>

        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          Single Player Card Game
        </h1>

        {!gameOver && (
          <Button
            onClick={drawCard}
            className={`text-white font-bold py-3 px-6 shadow-md transition duration-300 mb-4 ${
              disableDraw
                ? "opacity-100 cursor-not-allowed bg-black hover:bg-black text-white"
                : "hover:bg-orange-300"
            }`}
            disabled={disableDraw}
          >
            Draw Card
          </Button>
        )}
        {gameOver && (
          <Button
            onClick={restartGame}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 shadow-md transition duration-300 mb-4"
          >
            Restart Game
          </Button>
        )}
        <div className="flex items-center justify-center">
          <div className="mr-16 w-72 h-40 rounded-lg p-2 shadow-lg border-2 bg-[#FEEFD0]">
            <div className="flex flex-col">
              <div className="flex justify-between mb-2">
                <p className="text-lg text-gray-700">Remaining Cards:</p>
                <p className="text-lg text-gray-700">{remainingCards}</p>
              </div>
              <div className="flex justify-between mb-2">
                <p className="text-lg text-gray-700">Defuse Cards:</p>
                <p className="text-lg text-gray-700">{defuse}</p>
              </div>
              <p className="text-gray-800 break-words justify-start">
                {message}
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-end mr-8">
            {drawnCard ? (
              <div className="flex justify-center items-center">
                <img
                  src={drawnCard}
                  alt="Drawn Card"
                  className="w-48 h-48 rounded-lg shadow-md transform hover:scale-105 transition duration-300"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ) : (
              <div className="flex justify-center items-center">
                <img
                  src={card}
                  alt="Card"
                  className="w-48 h-48 rounded-lg shadow-md transform hover:scale-105 transition duration-300"
                  style={{ objectFit: "cover" }}
                />
              </div>
            )}
          </div>
        </div>

        <div className="h-24 mt-8 flex justify-center flex-wrap">
          {initial.map((card, index) => (
            <img
              key={index}
              src={card}
              alt={`Card ${index + 1}`}
              className="w-24 h-24 mr-4 mb-4 rounded-lg shadow-md transform hover:scale-105 transition duration-300"
              style={{ objectFit: "cover" }}
            />
          ))}
        </div>
      </div>
      <GameFaq />
    </>
  );
};

export default CardGame;
