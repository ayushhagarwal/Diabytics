import React from "react";

const About = () => {
  return (
    <div>
      <p className="text-3xl text-center py-5">Diabytics</p>
      <div className="flex justify-start h-screen items-start py-2 px-5 flex-col">
        <p className="text-xl text-indigo-900 font-sans">
          A tool to keep track of all your diabetes tests and help keep your
          disease in check. Just enter your latest test results after you login
          and get the stats in a comprehensive graph.
        </p>
      </div>
    </div>
  );
};

export default About;
