import React, { useState } from "react";

const Tv = () => {
  const [status, setStatus] = useState(false);
  return (
    <div>
      <h1>{status ? "Bat" : "Tat"}</h1>
      <button
        onClick={() => {
          if (status) {
            setStatus((prevStatus) => {
              console.log("prev", prevStatus);
              return false;
            });
          } else {
            setStatus(true);
          }
        }}
      >
        Power
      </button>
    </div>
  );
};

export default Tv;
