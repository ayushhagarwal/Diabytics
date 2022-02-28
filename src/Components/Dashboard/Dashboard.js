import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Charts from "../Chart/Charts";

const Dashboard = (props) => {
  const history = useHistory();

  const enterhandler = () => {
    history.push({
      pathname: "/datas",
    });
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-xl text-indigo-900 py-5">
        Hello! Below is your test analytics over time.
      </p>

      <Charts />
      <div className="flex items-center">
        <span className="flex items-center">
          <div className="bg-blue-500 w-10 h-5 my-5 mx-2"></div>
          <p>PPBS</p>
        </span>
        <span className="flex items-center">
          <div className="bg-green-400 w-10 h-5 my-5 mx-2"></div>
          <p>FBS</p>
        </span>
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded mx-2"
        onClick={enterhandler}
      >
        Enter Data
      </button>
    </div>
  );
};

export default Dashboard;
