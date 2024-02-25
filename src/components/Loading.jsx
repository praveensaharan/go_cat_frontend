import React from "react";
import kimage from "../assets/Hourglass.gif";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white dark:bg-gray-800">
      <img src={kimage} alt="Loading..." className="w-16 h-16 mb-4" />
      <p className="text-gray-600 text-lg font-semibold">
        "Patience is the key to success."
      </p>
    </div>
  );
};

export default LoadingSpinner;
