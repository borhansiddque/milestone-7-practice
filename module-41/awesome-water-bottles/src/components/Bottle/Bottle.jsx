import React from "react";
import "./Bottle.css";

const Bottle = ({ bottle }) => {
  const { name, price, imageUrl } = bottle;
  return (
    <div className="bottle">
      <img src={imageUrl} alt="" className="w-full h-72" />
      <div className="space-y-4 mt-4">
        <h2 className="text-3xl font-semibold">{name}</h2>
        <div className="flex justify-between items-center">
          <h4 className="text-2xl font-semibold">$ {price}</h4>
          <p className="font-medium text-yellow-800">Reviews: 4.8</p>
        </div>
        <button className="btn">Add To Cart</button>
      </div>
    </div>
  );
};

export default Bottle;
