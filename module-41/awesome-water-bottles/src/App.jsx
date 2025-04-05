import { Suspense } from "react";
import "./App.css";
import Bottles from "./components/Bottles/Bottles";
import Hero from "./components/Hero/Hero";

const bottlesPromise = fetch("../public/bottles.json").then((res) => res.json());

function App() {
  return (
    <>
      <Hero></Hero>
      <Suspense fallback={<h2>Loading...</h2>}>

        <h2 className="text-center my-5 font-bole text-4xl">Buy Awesome Water Bottles</h2>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  );
}

export default App;
