import React, { use, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css"

const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);
  const [cart, setCart] = useState([]);

  const handelAddToCart = (bottle) => {
    console.log(bottle);
  }

  return ( 
  <>
    <h3 className="text-2xl">Bottles: {bottles.length}</h3>
    <div className="grid mt-10">
      {
        bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handelAddToCart={handelAddToCart}></Bottle>)
      }
    </div>
  </>
  );
};

export default Bottles;
