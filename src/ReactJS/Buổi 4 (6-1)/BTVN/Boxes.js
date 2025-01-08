// Boxes.js
import React from "react";

const Boxes = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "10px",
        gap: "10px",
      }}
    >
      <div
        style={{
          backgroundColor: "yellow",
          padding: "10px",
          width: "150px",
          height: "80px",
        }}
      >
        Box 1
      </div>
      <div
        style={{
          backgroundColor: "yellow",
          padding: "10px",
          width: "150px",
          height: "80px",
        }}
      >
        Box 2
      </div>
      <div
        style={{
          backgroundColor: "yellow",
          padding: "10px",
          width: "150px",
          height: "80px",
        }}
      >
        Box 3
      </div>
      <div
        style={{
          backgroundColor: "yellow",
          padding: "10px",
          width: "150px",
          height: "80px",
        }}
      >
        Box 4
      </div>
    </div>
  );
};

export default Boxes;
