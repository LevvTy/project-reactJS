import React, { useState, useEffect } from "react";

const Bai3 = () => {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (inputValue.trim() === "") {
      return;
    }
    if (event.key === "Enter") {
      setMessage(`Bạn đã nhập: ${inputValue}`);
    }
  };

  useEffect(() => {
    addEventListener("keydown", handleKeyDown);

    // Cleanup function để gỡ sự kiện khi component unmount
    return () => {
      removeEventListener("keydown", handleKeyDown);
    };
  }, [inputValue]);

  return (
    <div>
      <h1>Bai 3</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      {message && <p>{message}</p>}
    </div>
  );
};

export default Bai3;
