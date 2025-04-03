import React from "react";

function Singer({ singer }) {
  const { name, age } = singer;
  return (
    <div className="card">
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
    </div>
  );
}

export default Singer;
