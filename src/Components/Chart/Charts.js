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
  console.log(datas);

  // const month = new Date(datas[0]?.date).toLocaleString(undefined, {
  //   month: "long",
  // });

  const labels = [
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
  ];
  // const options = {
  //   tooltips: {
  //     enabled: true,
  //   },
  //   responsive: true,
  //   scales: {
  //     y: [
  //       {
  //         display: true,
  //         stacked: true,
  //         ticks: {
  //           min: 0, // minimum value
  //           max: 10, // maximum value
  //         },
  //       },
  //     ],
  //   },
  // };
  const options = {
    legend: {
      display: true,
    },
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          gridLines: {
            color: "#222",
            borderDash: [2, 2],
          },
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            color: "#222",
            borderDash: [2, 2],
          },
          ticks: {
            autoSkip: true,
            autoSkipPadding: 40,
            maxRotation: 0,
          },
        },
      ],
    },
    layout: {
      padding: 10,
    },
    hover: {
      mode: "x",
      intersect: false,
    },
    tooltips: {
      enabled: false,
      mode: "x",
      intersect: false,
      custom: (tooltipModel) => {
        // hide the tooltip
        if (tooltipModel.opacity === 0) {
          this.hide();
          return;
        }
        const position =
          this.refs.chart.chart_instance.chart.canvas.getBoundingClientRect();

        // set position of tooltip
        const left = position.left + tooltipModel.caretX;
        const top = position.top + tooltipModel.caretY;

        // set values
        const date = Math.random(); // tooltipModel.dataPoints[0].xLabel;
        const valueNew = 2; // tooltipModel.dataPoints[0].yLabel;
        const valueOld = 3; // tooltipModel.dataPoints[1].yLabel;

        this.setPositionAndData({ top, left, date, valueNew, valueOld });
      },
    },
  };
  let ppbs = [];
  if (datas.length > 0) {
    datas?.map((item) => ppbs.push(item.ppbs));
  } else {
    ppbs = null;
  }
  let fbs = [];
  if (datas.length > 0) {
    datas?.map((item) => fbs.push(item.fbs));
  } else {
    ppbs = null;
  }
  console.log(ppbs);
  const data = {
    labels,
    datasets: [
      {
        data: ppbs,
        label: "ppbs",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
      },

      {
        data: fbs,
        label: "fbs",
        fill: false,
        lineTension: 0.1,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
      },
    ],
  };

  return (
    <div className=" h-80 w-80">
      <Line options={options} data={data} />
    </div>
  );
};

export default Charts;
