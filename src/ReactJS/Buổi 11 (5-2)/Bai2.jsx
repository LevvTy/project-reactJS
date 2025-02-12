import React, { useState, useEffect } from "react";

const Bai2 = () => {
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, []);

  return (
    <div>
      <h1>Bai 2</h1>
      <h1>{timeLeft > 0 ? timeLeft : "Hết giờ!"}</h1>
    </div>
  );
};

export default Bai2;
