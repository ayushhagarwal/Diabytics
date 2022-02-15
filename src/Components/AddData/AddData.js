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
    <div className="'h-screen flex bg-gray-bg1'">
      <div className="w-full max-w-md m-auto bg-blue-100 rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <form onSubmit={onSubmit}>
          <div>
            <input
              type="date"
              placeholder="Date of test"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="PPBS "
              onChange={(e) => setPpbs(e.target.value)}
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="FBS"
              onChange={(e) => setFbs(e.target.value)}
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
            />
          </div>
          <input
            type="submit"
            value="Submit Results"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
          />
        </form>
      </div>
    </div>
  );
};

export default AddData;
