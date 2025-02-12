import React, { useEffect, useRef, useState } from "react";

const Page13 = () => {
  const [count, setCount] = useState(0);
  const timer = useRef(0);

  const onStart = () => {
    timer.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };
  const onStop = () => {
    clearInterval(timer.current);
  };

  useEffect(() => {});

  return (
    <div>
      <h1>dem so</h1>
      <h1>{count}</h1>
      <div>
        <button onClick={onStart}>Start</button>
        <button onClick={onStop}>Stop</button>
      </div>
    </div>
  );
};

export default Page13;
