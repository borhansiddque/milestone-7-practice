import './App.css'
import Todo from './Todo'

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
      <Todo task={"Learn JavaScript"} isDone={true} time={100}></Todo>
      <Todo task={"Learn React JS"} isDone={false}></Todo>
      <Todo task={"Learn HTML"} isDone={true}></Todo>

      {/* <Person></Person>
      <FavFood/>
      <Sleep></Sleep>
      <Friends name={"Rohan"} age={20} hasVehicle={"Yes"}></Friends>
      <Friends name={"Mankir Poya"} age={22} hasVehicle={"No"}></Friends>
      <Girlfriend name={"Adiba"} phone={"01822334455"} trueLove={"Yes"}></Girlfriend>
      <Subject subject={"Accounting"} number={89}></Subject>
      <ProfileCard name={"Borhan Siddque"} title={"Font-end Developer"} imageUrl={"https://images.pexels.com/photos/1040879/pexels-photo-1040879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}></ProfileCard>
      <ProfileCard name={"Italo Melo"} imageUrl={"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}></ProfileCard> */}
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

function ProfileCard({name, title = "Title Not Found", imageUrl}) {
  return (
    <div className='card'>
      <img src={imageUrl} alt="" width={"100px"} height={"100px"} />
      <h2>{name}</h2>
      <h5>{title}</h5>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem dolorem officiis, deserunt hic illo nihil explicabo accusantium libero possimus similique molestiae eum consequatur consequuntur itaque aliquid vitae consectetur iusto deleniti.</p>
    </div>
  )
}

export default App
