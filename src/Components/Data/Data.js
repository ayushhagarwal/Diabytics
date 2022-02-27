import React from "react";

// eslint-disable-next-line
const Data = ({ data, setDatas, datas }) => {
  // Delete Data

  // eslint-disable-next-line
  const deleteData = (id) => {
    fetch(`https://diabytics-default-rtdb.firebaseio.com//todo/${id}.json`, {
      method: "DELETE",
    }).then(() => {
      setDatas(datas.filter((data) => data.id !== id));
    });
  };

  return (
    <div className="p-2">
      {/* <div className="max-w-sm bg-blue-100 rounded-lg border border-primaryBorder shadow-default ">
        <div className="px-3 py-2">
          <h3>
            {data.date}
            <FaTimes
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => deleteData(data.id)}
            />
          </h3>
          <p>{data.ppbs}</p>
          <p>{data.fbs}</p>
        </div>
      </div> */}
    </div>
  );
};

export default Data;
