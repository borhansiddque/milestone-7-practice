import React from "react";

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

// Conditional Rendering : 3 Ternary
// export default function Todo({ task, isDone, time = 0 }) {
//   return isDone ? (
//     <li>
//       Done: {task} - {time}
//     </li>
//   ) : (
//     <li>Pending: {task}</li>
//   );
// }

// // Conditional Rendering : 4 &&
// export default function Todo({ task, isDone, time = 0 }) {
//   return isDone && <li>Done Tasks: {task} Time: {time}</li>
// }

// // Conditional Rendering : 4 ||
// export default function Todo({ task, isDone, time = 0 }) {
//   return isDone || <li>Not Done Tasks: {task} Time: {time}</li>
// }

// Conditional Rendering : 6 Use variable
export default function Todo({task, isDone}) {
  let listItem ;
  if (isDone === true) {
    listItem = <li>Done: {task}</li>
  } else {
    listItem = <li>Pending: {task}</li>
  }
  return listItem;
}