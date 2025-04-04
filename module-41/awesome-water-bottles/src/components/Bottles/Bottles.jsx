import React, { use } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css"

const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);

  return (
    <div className="grid">
      {
        bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>)
      }
    </div>
  );
};

export default Bottles;
