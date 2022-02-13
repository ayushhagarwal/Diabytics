import React, { useState } from "react";

const AddData = ({ add }) => {
  const [date, setDate] = useState("");
  const [ppbs, setPpbs] = useState("");
  const [fbs, setFbs] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!date) {
      alert("Please add a Date");
      return;
    }
    add({ date, ppbs, fbs });
    setDate("");
    setPpbs("");
    setFbs("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          type="date"
          placeholder="Date of test"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="PPBS "
          onChange={(e) => setPpbs(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="FBS"
          onChange={(e) => setFbs(e.target.value)}
        />
      </div>
      <input type="submit" value="Submit Results" />
    </form>
  );
};

export default AddData;
