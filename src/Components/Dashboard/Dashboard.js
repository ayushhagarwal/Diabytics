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
      <h3>Hello welcome to your dashboard</h3>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
        onClick={enterhandler}
      >
        Enter Data
      </button>
      <Charts />
    </div>
  );
};

export default Dashboard;
