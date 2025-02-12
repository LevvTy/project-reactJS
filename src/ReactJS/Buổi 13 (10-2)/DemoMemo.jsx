import React, { memo, useState } from "react";
const Con = memo(() => {
  console.log("re-render component con");
  return <h1>Con Component</h1>;
});

const DemoMemo = () => {
  const [isCheck, setCheck] = useState(false);
  return (
    <div>
      DemoMemo
      <button onClick={() => setCheck(!isCheck)}>Check</button>
      <Con />
    </div>
  );
};

export default DemoMemo;
