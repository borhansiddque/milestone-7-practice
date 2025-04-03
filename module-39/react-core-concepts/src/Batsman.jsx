import React from "react";
import { useState } from "react";

export default function Batsman() {
  const playerStyle = {
    border: "2px solid red",
    padding: "15px",
  };

  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);

  const handleRuns = (newRun) => {
    const updatedRuns = runs + newRun;

    if (newRun === 6) {
      const updatedSixes = sixes + 1;
      setSixes(updatedSixes);
    }

    setRuns(updatedRuns);
  };

  return (
    <div style={playerStyle}>
      <p>Six: {sixes}</p>
      <h3>Player: Bangladeshi Batsman</h3>
      {runs > 50 && <p>Your Score: 50</p>}
      <h2>Score: {runs}</h2>
      <button onClick={() => handleRuns(1)}>Singles</button>
      <button onClick={() => handleRuns(4)}>Four</button>
      <button onClick={() => handleRuns(6)}>Six</button>
    </div>
  );
}
