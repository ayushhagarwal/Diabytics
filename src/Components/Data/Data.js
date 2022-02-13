import React from "react";
import { FaTimes } from "react-icons/fa";
const Data = ({ data, onDelete }) => {
  console.log(data);
  return (
    <div>
      <div>
        <h3>
          {data.date}
          {""}
          <FaTimes
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => onDelete(data.id)}
          />
        </h3>
      </div>

      <p>{data.ppbs}</p>
      <p>{data.fbs}</p>
    </div>
  );
};

export default Data;
