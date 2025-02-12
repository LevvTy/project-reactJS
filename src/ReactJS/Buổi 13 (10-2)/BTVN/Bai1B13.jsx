import React, { useRef } from "react";

const Bai1B13 = () => {
  const inputRef = useRef(null);
  const clickCountRef = useRef(0);

  const handleClick = () => {
    // Focus vào input bằng cách sử dụng useRef
    inputRef.current.focus();

    // Tăng số lần button được click và lưu vào biến sử dụng useRef
    clickCountRef.current += 1;
    console.log(`Button clicked ${clickCountRef.current} times`);
  };

  return (
    <div>
      <h1>Bài 1</h1>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input and Log Clicks</button>
    </div>
  );
};

export default Bai1B13;
