import { Suspense } from "react";
import "./App.css";
import Bottles from "./components/Bottles/Bottles";

const bottlesPromise = fetch("../public/bottles.json").then((res) => res.json());

function App() {
  return (
    <>
      <h2>Buy Awesome Water Bottles</h2>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  );
}

export default App;
