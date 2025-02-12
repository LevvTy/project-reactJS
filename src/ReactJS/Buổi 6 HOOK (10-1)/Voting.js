import React, { useState } from "react";

const Voting = () => {
  let [voteA, setVoteA] = useState(0);
  let [voteB, setVoteB] = useState(0);
  const perVoteA = (voteA * 100) / (voteA + voteB);
  const perVoteB = (voteB * 100) / (voteA + voteB);

  const onVoteA = () => {
    setVoteA((prevVoteA) => {
      return prevVoteA + 1;
    });
  };
  const onVoteB = () => {
    setVoteB((prevVoteB) => {
      return prevVoteB + 1;
    });
  };

  return (
    <div style={{ border: "2px solid tomato", padding: "10px" }}>
      <div
        style={{
          width: "80vh",
          border: "1px solid black",
          display: "flex",
          color: "white",
        }}
      >
        <div
          style={{
            background: "red",
            height: "50px",
            width: `${!perVoteA && !perVoteB ? 50 : perVoteA}%`,
          }}
        >
          A : {!voteA ? 0 : perVoteA.toFixed(2)}%
        </div>
        <div
          style={{
            background: "green",
            height: "50px",
            width: `${!perVoteA && !perVoteB ? 50 : perVoteB}%`,
          }}
        >
          B : {!voteB ? 0 : perVoteB.toFixed(2)}%
        </div>
      </div>
      <div>
        <h1>{voteA}</h1>
        <button onClick={onVoteA}>Vote A</button>
        <h1>{voteB}</h1>
        <button onClick={onVoteB}>Vote B</button>
      </div>
    </div>
  );
};

export default Voting;
