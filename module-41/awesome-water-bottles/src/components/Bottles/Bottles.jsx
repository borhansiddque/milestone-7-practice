import React, { use } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css"

const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);

  return ( 
  <>
    <h3 className="text-3xl">Bottles: {bottles.length}</h3>
    <div className="grid mt-10">
      {
        bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>)
      }
    </div>
  </>
  );
};

export default Bottles;
