import React, { useState, useMemo, useCallback } from "react";

function Bai4B13() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  // Tính tổng của các số trong danh sách sử dụng useMemo
  const total = useMemo(() => {
    console.log("Calculating total...");
    return numbers.reduce((acc, num) => acc + num, 0);
  }, [numbers]);

  // Sử dụng useCallback để đảm bảo hàm thêm số không bị tạo lại mỗi lần re-render
  const addRandomNumber = useCallback(() => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setNumbers([...numbers, randomNumber]);
  }, [numbers]);

  return (
    <div>
      <h2>Danh sách số:</h2>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <p>Tổng: {total}</p>
      <button onClick={addRandomNumber}>Thêm số ngẫu nhiên</button>
    </div>
  );
}

export default Bai4B13;
