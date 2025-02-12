import React, { useState } from "react";

const ExpenseTracker = () => {
  const renderData = () => {};
  return (
    <div className="main">
      <div className="container">
        <div className="flex">
          <div>
            <h4>Title</h4>
            <input className="input" />
          </div>
          <div>
            <h4>Amount</h4>
            <input className="input" />
          </div>
        </div>
        <div>
          <h4>Date</h4>
          <input className="input" type="date" />
        </div>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <button className="btnAdd">Add Expense</button>
        </div>
      </div>
      <div className="mainData">
        <div className="filter">
          <p>Filter by Year</p>
          <select className="select">
            <option></option>
          </select>
        </div>
        <div className="data">{renderData()}</div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
