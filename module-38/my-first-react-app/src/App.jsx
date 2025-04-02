import './App.css'

function App() {

  return (
    <>
      <h1>React App</h1>
      <Person></Person>
      <FavFood/>
      <Sleep></Sleep>
      <Friends name={"Rohan"} age={20} hasVehicle={"Yes"}></Friends>
      <Girlfriend name={"Adiba"} phone={"01822334455"} trueLove={"Yes"}></Girlfriend>
    </>
  )
}

function Person() {
  return <div>
      <h4>Hello I am from Person Component</h4>
    </div>
  
}

function FavFood() {
  return <>
    <h4>My Fav Food Is : Pineapple</h4>
  </>
}

function Sleep() {
  return (
    <h4>Ami Daily 7-8 Hr Ghumate pochondho kori</h4>
  )
}

function Friends(props) {
  return (
    <div>
      <h5>Name: {props.name}</h5>
      <p>Age: {props.age}</p>
      <p>hasVehicle: {props.hasVehicle}</p>
    </div>
  )
}

function Girlfriend({name, phone, trueLove}) {
  return (
    <div>
      <h5>Name: {name}</h5>
      <p>Phone: {phone}</p>
      <p>True Love: {trueLove}</p>
    </div>
  );
}

export default App
