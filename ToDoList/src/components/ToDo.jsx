import "./ToDo.css";

// const DATE = new Date();
// const dateDuJour = DATE.toLocaleString()

// -------------- IF CONDITION -------------
// function ToDo({todo, date, checked}) {
//   if(checked){
//     return <li className = "green"><input type="checkbox" defaultChecked></input>{todo} - {date}</li> }
//   return <li className = "orange">{todo} - {date}</li>
// }

function ToDo({ todo, date, checked }) {
  function handleClick(todo) {
    alert(todo)
  }
  if (checked) {
    return (
      <li className="green" onClick={handleClick}>
        <input type="checkbox" defaultChecked></input>
        {todo} - {date}
      </li>
    );
  }
  return (
    <li className="orange" onClick={handleClick}>
      {todo} - {date}
    </li>
  );
}

export default ToDo;

// ------------- TERNAIRE CONDITION -----------
// function ToDoTernaire({todo, date, checked}){
//     return checked ?
//     <li className = "green"><input type="checkbox" defaultChecked></input>{todo} - {date}</li> : <li className = "orange">{todo} - {date}</li>
// }
// export default ToDoTernaire

// ---------------- AND CONDITION && -------------
// function ToDoAnd({todo, date, checked}){
//   return <li>{todo} - {date}{checked && <input type="checkbox" defaultChecked></input>}</li>
// }

// function ToDo({ todo, date, checked}) {
//   return (
//       <li>
//         {todo} - {date}
//       </li>
//   );}
// export default ToDoAnd
