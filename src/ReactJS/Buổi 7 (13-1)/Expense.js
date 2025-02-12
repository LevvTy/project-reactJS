import React, { useEffect, useState } from "react";
import "./expense.css";

const KEY = "ExpenseList";

// const expenseList = getDataFromLocal(KEY);
// [
//   {
//     id: "1",
//     title: "Rice",
//     price: "20$",
//   },
//   {
//     id: "2",
//     title: "Vesgetable",
//     price: "50$",
//   },
//   {
//     id: "3",
//     title: "Wash",
//     price: "30$",
//   },
// ];
// (addList)
const Expense = () => {
  const getDataFromLocal = (KEY) => {
    const dataLocal = localStorage.getItem(KEY);
    const json = dataLocal ? JSON.parse(dataLocal) : [];
    return json;
  };
  const expenseList = getDataFromLocal(KEY);

  const [] = useState();
  const [item, setItem] = useState(expenseList);
  const [titleValue, setTitleValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [selectedYear, setSelectedYear] = useState("All");
  const [years, setYears] = useState(() => {
    const uniqueYears = new Set(
      expenseList.map((expense) =>
        new Date(expense.date).getFullYear().toString()
      )
    );
    return ["All", ...uniqueYears];
  });

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(item));
  }, [item]);

  const renderData = () => {
    const filteredItems =
      selectedYear === "All"
        ? item
        : item.filter(
            (expense) =>
              new Date(expense.date).getFullYear().toString() === selectedYear
          );
    return filteredItems.map((item) => {
      return (
        <div className="pd" key={item.id}>
          <div className="render">
            <h3 className="date">{item.date}</h3>
            <h3 className="w-60">{item.title}</h3>
            <h3 className="w-20">{item.price}</h3>
            <button className="w-10">change</button>
          </div>
        </div>
      );
    });
  };
  renderData();

  const addList = (formData) => {
    setItem((prevItem) => {
      const newData = {
        id: `${prevItem.length + 1}`,
        title: titleValue,
        price: priceValue + "$",
        date: dateValue,
      };
      const newYear = new Date(dateValue).getFullYear().toString();
      if (!years.includes(newYear)) {
        setYears((prevYears) => [...prevYears, newYear]);
      }

      return [...prevItem, newData];
    });

    setTitleValue("");
    setPriceValue("");
    setDateValue("");
  };
  // form

  //addList(form)

  return (
    <div className="main">
      <div className="container">
        <div className="flex">
          <div>
            <h4>Title</h4>
            <input
              className="input"
              value={titleValue}
              onChange={(e) => {
                setTitleValue(e.target.value);
              }}
            />
          </div>
          <div>
            <h4>Amount</h4>
            <input
              type="number"
              className="input"
              value={priceValue}
              onChange={(e) => {
                setPriceValue(e.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <h4>Date</h4>
          <input
            className="input"
            type="date"
            value={dateValue}
            onChange={(e) => {
              setDateValue(e.target.value);
            }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <button
            className="btnAdd"
            disabled={!titleValue.trim() || !priceValue.trim()}
            onClick={addList}
          >
            Add Expense
          </button>
        </div>
      </div>
      <div className="mainData">
        <div className="filter">
          <p>Filter by Year</p>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="select"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="data">{renderData()}</div>
      </div>
    </div>
  );
};
export default Expense;
