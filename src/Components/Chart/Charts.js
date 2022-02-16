import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale
);

const Charts = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("https://diabytics-default-rtdb.firebaseio.com/todo.json")
      .then((res) => res.json())
      .then((res) => {
        let data = [];
        for (const key in res) {
          data.push({
            id: key,
            ...res[key],
          });
        }
        setDatas(data);
      });
  }, []);

  const month = new Date(datas[0].date).toLocaleString(undefined, {
    month: "long",
  });

  return (
    <div className="h-80 w-80">
      <Line
        datasetIdKey="id"
        data={{
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          datasets: [
            {
              id: 1,
              label: month,
              data: [5],
            },
            {
              id: 2,
              label: "",
              data: [3, 2, 1],
            },
          ],
        }}
      />
    </div>
  );
};

export default Charts;
