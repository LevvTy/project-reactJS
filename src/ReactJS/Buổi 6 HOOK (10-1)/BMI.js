import React, { useState } from "react";

const BMI = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBMI] = useState(0);
  const caculateBMI = () => {
    const h = height / 100;
    const bmi = weight / h ** 2;
    setBMI(bmi);
  };
  return (
    <div>
      <input
        type="number"
        onChange={(e) => {
          const value = e.target.value;
          const nbValue = parseInt(value);
          setWeight(nbValue);
        }}
        placeholder="Nhập Cân Nặng"
      />
      <input
        type="number"
        onChange={(e) => {
          const value = e.target.value;
          const nbValue = parseInt(value);
          setHeight(nbValue);
        }}
        placeholder="Nhập Chiều Cao"
      />

      <button onClick={caculateBMI}>Tính BMI</button>
      {!!bmi && <h1>BMI: {bmi.toFixed(2)}</h1>}
    </div>
  );
};

export default BMI;
