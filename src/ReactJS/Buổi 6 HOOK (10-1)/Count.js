import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const onCount = () => {
    //function Callback
    setCount((prevCount) => {
      console.log("prev", prevCount);
      return prevCount + 1;
    });
  };
  const resetCount = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onCount}>Count</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

export default Count;
