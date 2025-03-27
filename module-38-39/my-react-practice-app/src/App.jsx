import Hero from "./Hero";
import Business from "./Business";
import Carousel from "./Carousel";
import "./App.css";

function App() {
  return (
    <>
      <Hero></Hero>
      <h1 className="text-4xl font-bold my-5">Learn React JS</h1>
      <Carousel></Carousel>
      <Person></Person>
      <Sports name="Sakib Al Hasan" salary="500K"></Sports>
      <Sports name="Tamim Iqbal" salary="400K"></Sports>
      <Game></Game>
      <Business name="Rohan" age="30" prof="Developer" salary="50K"></Business>
      <Fruit></Fruit>
    </>
  );
}



function Person() {
  const age = 25;
  const name = "Modhu Modhu";
  return (
    <>
      <div className="card">
        <p>Oi kire Oi kire - {name}</p>
        <p>My age : {age} Year</p>
      </div>
    </>
  );
}

function Fruit() {
  return (
    <div className="card">
      <h2>Fav Fruits</h2>
      <ul>
        <li>Apple</li>
        <li>Banana</li>
        <li>WaterMelon</li>
        <li>Orange</li>
      </ul>
    </div>
  );
}

function Game() {
  return (
    <>
      <div className="card">
        <h3>My Fav Game List:</h3>
        <ol>
          <li>PUBG</li>
          <li>COC: Clash of Clan</li>
          <li>Minecraft</li>
        </ol>
      </div>
    </>
  );
}

function Sports({name, salary}) {
  return (
    <div className="card">
      <h3>Cricket</h3>
      <h4>Cricket Player: {name}</h4>
      <h5>Salary: {salary}</h5>
      <p>I play cricket everyday</p>
    </div>
  );
}

export default App;
