import './App.css'

function App() {
  const headingStyle = {
    color: "purple",
    backgroundColor: "white",
    padding: "1rem",
    borderRadius: "10px"
  }

  return (
    <>
      <h1 style={headingStyle}>React App</h1>
      <Person></Person>
      <FavFood/>
      <Sleep></Sleep>
      <Friends name={"Rohan"} age={20} hasVehicle={"Yes"}></Friends>
      <Friends name={"Mankir Poya"} age={22} hasVehicle={"No"}></Friends>
      <Girlfriend name={"Adiba"} phone={"01822334455"} trueLove={"Yes"}></Girlfriend>
      <Subject subject={"Accounting"} number={89}></Subject>
    </>
  )
}

function Person() {
  return <div className="card">
      <h4>Hello I am from Person Component</h4>
    </div>
}

function FavFood() {
  return <div className="card">
    <h4>My Fav Food Is : Pineapple</h4>
  </div>
}

function Sleep() {
  const sleepStyle = {
    border: "2px solid tomato",
    padding: "20px",
    borderRadius: "10px"
  };

  return (
    <h4 style={sleepStyle}>Ami Daily 7-8 Hr Ghumate pochondho kori</h4>
  )
}

function Friends(props) {
  return (
    <div className="card">
      <h3>Friend</h3>
      <h5>Name: {props.name}</h5>
      <p>Age: {props.age}</p>
      <p>hasVehicle: {props.hasVehicle}</p>
    </div>
  )
}

function Girlfriend({name, phone, trueLove}) {
  return (
    <div className="card">
      <h3>Girlfriend</h3>
      <h5>Name: {name}</h5>
      <p>Phone: {phone}</p>
      <p>True Love: {trueLove}</p>
    </div>
  );
}

function Subject({subject, number}) {
  return (
    <div className='card'>
      <h3>My Fav Subject is: {subject}</h3>
      <p>Last exam i got number on this subject: {number}</p>
    </div>
  )
}

export default App
