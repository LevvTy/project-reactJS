import React, { useState } from "react";

const data = [
  {
    id: "1",
    title: "Rice",
    price: "20$",
  },
  {
    id: "2",
    title: "Vesgetable",
    price: "50$",
  },
  {
    id: "3",
    title: "Wash",
    price: "30$",
  },
];

const Main = () => {
  const [] = useState();
  const [item, setItem] = useState(data);
  const [titleValue, setTitleValue] = useState("");
  const [priceValue, setPriceValue] = useState("");

  const renderData = () => {
    return item.map((item) => {
      return (
        <div key={item.id}>
          <div style={{ display: "flex", gap: "100px" }}>
            <h3>{item.title}</h3>
            <h3>{item.price}</h3>
            <button>change</button>
          </div>
        </div>
      );
    });
  };

  const addList = (formData) => {
    setItem((prevItem) => {
      const newData = {
        id: `${prevItem.length + 1}`,
        title: titleValue,
        price: priceValue,
      };
      return [...prevItem, newData];
    });
    setTitleValue("");
    setPriceValue("");
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        <p>Filter by Year</p>
        <select>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
        </select>
      </div>
      <div>{renderData()}</div>
    </>
  );
};

export default Main;
