import React from "react";

const hello = (props) => {
  console.log(props.location.state);
  return (
    <div>
      <h3>Hello welcome to your dashboard</h3>
    </div>
  );
};

export default hello;
