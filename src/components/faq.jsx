import React from "react";
import bombImg from "../assets/bomb.png";
import catImg from "../assets/cat.png";
import defuseImg from "../assets/defuse.png";
import shuffleImg from "../assets/shuffle.png";

const GameFaq = () => {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-orange-200 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          How to Play
        </h2>
        <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
          <div>
            <div className="mb-10 bg-[#FFF7E6] dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                <svg
                  className="flex-shrink-0 mr-2 w-6 h-6 text-blue-500 dark:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                What do you mean by "Cat card"?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                In the game, the "Cat card" represents a harmless card that
                doesn't affect the game outcome when drawn.
              </p>
              <div className="flex justify-center items-center mt-4">
                <img
                  src={catImg}
                  alt="Cat Card"
                  className="w-48 h-48 rounded-lg shadow-md transform hover:scale-105 transition duration-300"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div className="mb-10 bg-[#FFF7E6] dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                <svg
                  className="flex-shrink-0 mr-2 w-6 h-6 text-red-500 dark:text-red-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                What happens when I draw an "Exploding Kitten card"?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Drawing an "Exploding Kitten card" results in an immediate game
                over. You lose the game if you draw this card.
              </p>
              <div className="flex justify-center items-center mt-4">
                <img
                  src={bombImg}
                  alt="Explosive Kitten Card"
                  className="w-48 h-48 rounded-lg shadow-md transform hover:scale-105 transition duration-300"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          <div>
            <div className="mb-10 bg-[#FFF7E6] dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                <svg
                  className="flex-shrink-0 mr-2 w-6 h-6 text-yellow-500 dark:text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                What is a "Defuse card" used for?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                A "Defuse card" can be used to defuse an "Exploding Kitten card"
                when drawn, allowing the game to continue.
              </p>
              <div className="flex justify-center items-center mt-4">
                <img
                  src={defuseImg}
                  alt="Defuse Card"
                  className="w-48 h-48 rounded-lg shadow-md transform hover:scale-105 transition duration-300"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div className="mb-10 bg-[#FFF7E6] dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                <svg
                  className="flex-shrink-0 mr-2 w-6 h-6 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                What happens when I draw a "Shuffle card"?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Drawing a "Shuffle card" restarts the game by shuffling the deck
                and refilling it with 5 cards.
              </p>
              <div className="flex justify-center items-center mt-4">
                <img
                  src={shuffleImg}
                  alt="Shuffle Card"
                  className="w-48 h-48 rounded-lg shadow-md transform hover:scale-105 transition duration-300"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameFaq;
