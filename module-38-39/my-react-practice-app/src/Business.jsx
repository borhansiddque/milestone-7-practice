export default function Business({name, age, prof, salary}) {
  console.log(name, age);
  
  return (
    <div className="card">
      <h4>Person Name: {name}</h4>
      <h5>Person Age: {age}</h5>
      <p>Profession: {prof}</p>
      <p>Salary: {salary}</p>
    </div>
  )
}