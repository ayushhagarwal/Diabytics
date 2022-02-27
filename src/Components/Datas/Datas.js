import React, { useEffect, useState } from "react";
import Data from "../Data/Data";
import AddData from "../AddData/AddData";
const Datas = () => {
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
  }, [datas]);

  // Add Data
  const addData = (data) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newData = {
      id,
      ...data,
    };
    setDatas([...datas, newData]);
  };

  return (
    <div>
      <p className="text-center text-xl py-10 text-indigo-900">
        Add your latest test results here.
      </p>
      <AddData add={addData} />

      <div className="flex flex-row">
        {datas.map((data) => (
          <Data key={data.id} data={data} setDatas={setDatas} datas={datas} />
        ))}
      </div>
    </div>
  );
};

export default Datas;
