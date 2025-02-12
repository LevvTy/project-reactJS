import React from "react";
import "./Page8.css";
import Check from "./Check";

const Page8 = () => {
  return (
    <>
      <div className="flex">
        <div className="mainContent">
          <div className="flex">
            <h3>Name</h3>
            <input className="size" />
          </div>
          <div className="flex">
            <h3>Class</h3>
            <input className="size" />
          </div>
          <div className="flex">
            <h3>isPreset</h3>
            <input type="checkbox" />
          </div>
          <div className="flex">
            <h3>Note</h3>
            <textarea className="size" />
          </div>
        </div>
        <Check />
      </div>
      <button>Submit</button>
    </>
  );
};

export default Page8;
