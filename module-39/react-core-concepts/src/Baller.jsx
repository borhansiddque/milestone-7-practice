import React from "react";
import { useState } from "react";

const Baller = () => {
  const ballerStyle = {
    border: "2px solid purple",
    padding: "15px",
    margin: "10px",
  };

  let [balls, setBalls] = useState(0);

  const handleBalls = () => {
    const updateBalls = balls + 1;
    setBalls(updateBalls);
  }
  
  if (balls > 6) {
    alert("Over Complete");
    balls = 0
  }

  return (
    <div style={ballerStyle}>
      <h3>Baller Name: Taskin</h3>
      <p>Ball: {balls}</p>
      <button onClick={handleBalls}>Count Balls</button>
    </div>
  );
};

export default Baller;
