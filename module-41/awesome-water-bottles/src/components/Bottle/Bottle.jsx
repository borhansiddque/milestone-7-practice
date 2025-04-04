import React from "react";
import "./Bottle.css";

const Bottle = ({ bottle }) => {
  const { name, price, imageUrl } = bottle;
  return (
    <div className="bottle">
      <img src={imageUrl} alt="" width={"100%"} height={"250px"} />
      <div>
        <h2>{name}</h2>
        <h4>$ {price}</h4>
      </div>
    </div>
  );
};

export default Bottle;
