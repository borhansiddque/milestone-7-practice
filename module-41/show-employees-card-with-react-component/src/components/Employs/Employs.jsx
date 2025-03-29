import React from "react";
import { use } from "react";
import Employ from "../Employ/Employ";

function Employs({ employsData }) {
  const employs = use(employsData);
  return (
    <div>
      <h2>Total Employs: {employs.length}</h2>
      <div className="grid grid-cols-2 gap-5 mt-10">
        {employs.map((employ) => (
          <Employ key={employ.id} employ={employ}></Employ>
        ))}
      </div>
    </div>
  );
}

export default Employs;
