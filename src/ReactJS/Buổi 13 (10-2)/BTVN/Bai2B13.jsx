import React, { useState, useMemo } from "react";

const Bai2B13 = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  const sum = useMemo(() => {
    console.log("Calculating sum...");
    return a + b;
  }, [a, b]);

  return (
    <div>
      <h1>Bài 2</h1>
      <input
        type="number"
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
        placeholder="Enter number A"
      />
      <input
        type="number"
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
        placeholder="Enter number B"
      />
      <p>The sum of A and B is: {sum}</p>
    </div>
  );
};

export default Bai2B13;
