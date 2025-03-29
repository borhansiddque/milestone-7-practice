import { Suspense } from "react";
import Employs from "./components/Employs/Employs";

function App() {
  const employsData = fetch("../public/employees.json").then((res) =>
    res.json()
  );
  return <>
          <Suspense fallback="Loading Employs Data........">
            <div className="w-1/2 mx-auto">
              <h2 className="text-4xl font-bold text-center my-12">Our All Employs</h2>
              <Employs employsData={employsData}></Employs>
            </div>
          </Suspense>
        </>;
}

export default App;
