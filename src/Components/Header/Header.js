import React from "react";

export const Header = () => {
  const handleSignup = () => {
    window.location.href = "/signup";
  };
  return (
    <div className="flex justify-center ">
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
          onClick={handleSignup}
        >
          Try Now
        </button>
      </div>
    </div>
  );
};
