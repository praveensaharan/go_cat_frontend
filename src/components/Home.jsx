import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import Leaderboard from "./Leaderboard";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const port = "https://go-cat.onrender.com";

const Home = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!user) return; // Check if user is null
        const response = await fetch(`${port}/user/${user.sub}`);
        const responseData = await response.json(); // Parse JSON response
        if (response.ok) {
          setUserData(responseData);
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

  return (
    <>
      <div className="bg-gradient-to-br from-orange-100 to-orange-50">
        <div className="container mx-auto max-w-md text-center pt-10">
          <h1 className="text-4xl font-extrabold text-orange-600 mb-6">
            Welcome To CatCards
          </h1>

          {isAuthenticated ? (
            <div>
              <div className="mb-8 flex items-center justify-center">
                {userData && userData.picture ? (
                  <img
                    src={userData.picture}
                    alt="Avatar"
                    className="mr-4 w-10 h-10 rounded-full"
                  />
                ) : (
                  <img
                    src={Logo}
                    alt="Avatar"
                    className="mr-4 w-10 h-10 rounded-full"
                  />
                )}

                <label
                  htmlFor="username"
                  className="block text-gray-700 text-lg mb-2"
                >
                  <span className="text-blue-500">
                    @
                    {userData && userData.nickname
                      ? userData.nickname
                      : user.sub}
                  </span>
                </label>
              </div>

              <div className="mb-8">
                <Link to="/play">
                  <Button className="text-white px-6 py-3 rounded-lg text-xl font-semibold transition duration-300">
                    Let's Play!
                  </Button>
                </Link>
              </div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800">
                  Your Score:{" "}
                  <span className="text-orange-500">
                    {userData && userData.score ? userData.score : 0}
                  </span>
                </h2>
              </div>
            </div>
          ) : (
            <div className="p-8 rounded-lg shadow-lg mb-10">
              <h2 className="text-3xl font-extrabold text-orange-600 mb-4">
                Ready to Play?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Log in to start your CatCards adventure!
              </p>
              <Button
                onClick={() => loginWithRedirect()}
                className="text-white px-6 py-3 rounded-lg text-xl font-semibold transition duration-300"
              >
                Log In Now
              </Button>
            </div>
          )}
        </div>

        <Leaderboard />
      </div>
    </>
  );
};

export default Home;
