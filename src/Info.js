import React from "react";

function Info(props) {
  return (
    <div className="result">
      <h3>You Won!</h3>
      <p>No. of Rolls: {props.count}</p>
    </div>
  );
}

export default Info;
