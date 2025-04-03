import React from 'react'

// export default function Todo({task, isDone}) {

//   if (isDone === true) {
//     return <li>Done: {task}</li>
//   } else {
//     return <li>Pending: {task}</li>
//   }
// }

// export default function Todo({task, isDone}) {

//   if (isDone === true) {
//     return <li>Done: {task}</li>
//   }
  
//   return <li>Pending: {task}</li>
  
// }

export default function Todo({task, isDone, time=0}) {
 return isDone ? <li>Done: {task} - {time}</li> : <li>Pending: {task}</li>
}
