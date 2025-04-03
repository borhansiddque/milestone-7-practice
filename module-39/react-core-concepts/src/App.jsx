import "./App.css";
import Batsman from "./Batsman";
import Counter from "./Counter";

function App() {
  function handleClick() {
    alert("I Am Clicked");
  }

  const handleClick3 = () => {
    alert("Clicked 3");
  };

  const handleClick5 = (num) => {
    const newNumber = num + 5;
    alert(newNumber);
  };

  return (
    <>
      <h2>My React App</h2>
      <Batsman></Batsman>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <br />
      <button
        onClick={function handleClick2() {
          alert("Clicked 2");
        }}
      >
        Click Me 2
      </button>
      <br />
      <button onClick={handleClick3}>Click Me 3</button>
      <br />
      <button onClick={() => alert("Clicked 4")}>Click Me 4</button>
      <br />
      <button
        onClick={() => {
          handleClick5(5);
        }}
      >
        Click Me 5
      </button>
    </>
  );
}

export default App;
