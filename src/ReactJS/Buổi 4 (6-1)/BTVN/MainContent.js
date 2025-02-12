// MainContent.js
import React from "react";

const MainContent = ({ title, des, text }) => {
  return (
    <div style={{ width: "80%" }}>
      <h1 style={{ backgroundColor: "#e9e9e9" }}>Big Title</h1>
      <h2>Title 01</h2>
      <p>Some text here...</p>
      <h2>Title 02</h2>
      <p>Some text here...</p>
      <h2>Title 03</h2>
      <p>Some text here...</p>
    </div>
  );
};

export default MainContent;
