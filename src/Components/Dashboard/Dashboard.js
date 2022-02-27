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
    <div>
      <p className="text-xl text-indigo-900 text-center py-5">
        Hello! Below is your test analytics over time.
      </p>

      <Charts />
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
