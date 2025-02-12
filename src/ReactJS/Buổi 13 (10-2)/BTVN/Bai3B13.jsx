import React, { useState, useCallback, useRef } from "react";

const Bai3B13 = () => {
  const [items, setItems] = useState([]);
  const renderCount = useRef(0);

  renderCount.current += 1;

  const addItem = useCallback(() => {
    setItems((prevItems) => [...prevItems, `Item ${prevItems.length + 1}`]);
  }, []);

  const deleteItem = useCallback((index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  }, []);

  return (
    <div>
      <h1>Bài 3</h1>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>Component rendered {renderCount.current} times</p>
    </div>
  );
};

export default Bai3B13;
