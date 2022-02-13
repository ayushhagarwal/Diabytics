import React, { useState } from "react";
import Data from "../Data/Data";
import AddData from "../AddData/AddData";
const Datas = () => {
  const [datas, setDatas] = useState([
    {
      id: 1,
      date: "20/02/2021",
      ppbs: 105,
      fbs: 150,
    },
    {
      id: 2,
      date: "20/03/2021",
      ppbs: 125,
      fbs: 160,
    },
    {
      id: 1,
      date: "20/04/2021",
      ppbs: 115,
      fbs: 150,
    },
  ]);

  // Add Data
  const addData = (data) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newData = {
      id,
      ...data,
    };
    setDatas([...datas, newData]);
  };

  // Delete Data
  const deleteData = (id) => {
    setDatas(datas.filter((data) => data.id !== id));
  };

  return (
    <div>
      <AddData add={addData} />
      hello welcome to data entry page
      <>
        {datas.map((data) => (
          <Data key={data.id} data={data} onDelete={deleteData} />
        ))}
      </>
    </div>
  );
};

export default Datas;
