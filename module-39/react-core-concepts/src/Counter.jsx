import React from "react";
import { useState } from "react";

const Counter = () => {
  const counterStyle = {
    border: "2px solid yellow",
    padding: "20px",
    margin: "10px",
  };

  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  return (
    <div style={counterStyle}>
      <h3>Count: {count}</h3>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Counter;
