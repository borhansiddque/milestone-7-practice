import './App.css'

function App() {

  return (
    <>
      <h1>React App</h1>
      <Person></Person>
      <FavFood/>
      <Sleep></Sleep>
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

export default App
