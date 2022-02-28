import React from "react";
import graph from "../../assets/images/graph.svg";

export const Header = () => {
  const handleSignup = () => {
    window.location.href = "/signup";
  };
  return (
    <div className="flex justify-start h-screen items-center px-10">
      <div>
        <p className="text-3xl color text-indigo-900 font-sans">
          Sick of loosing records of your diabetes tests?
        </p>
        <p className="text-xl py-4">
          Not anymore! Keeping track of your test just got easier.
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSignup}
        >
          Try Now
        </button>
      </div>
      <div>
        <img src={graph} alt="chart" />
      </div>
    </div>
  );
};
