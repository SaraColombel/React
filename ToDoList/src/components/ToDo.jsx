import "./ToDo.css";
import { useState } from "react"

// const DATE = new Date();
// const dateDuJour = DATE.toLocaleString()

// -------------- IF CONDITION -------------
// function ToDo({todo, date, checked}) {
//   if(checked){
//     return <li className = "green"><input type="checkbox" defaultChecked></input>{todo} - {date}</li> }
//   return <li className = "orange">{todo} - {date}</li>
// }

function ToDo({ todo, date, checked, heureRestante }) {
  const [heure, setHeure] = useState(heureRestante);

  function handleClickMinus() {
    if (heure > 0) {
      setHeure(heure - 1);
    }
  }

  function handleClickPlus() {
    setHeure(heure + 1);
  }


  if (checked) {
    return (
      <li className="green">
        <input type="checkbox" defaultChecked className="checkbox"></input>
        <p>{date} | <strong>{todo}</strong></p>
        <p className="h">Heures restantes : <strong>{heure}</strong></p>
        <button onClick={handleClickMinus}>-</button>
        <button onClick={handleClickPlus}>+</button>
      </li>
    );
  }
  return (
    <li className="orange">
      <p>{date} | <strong>{todo}</strong></p>
      <p className="h">Heures restantes : <strong>{heure}</strong></p>
      <button onClick={handleClickMinus}>-</button>
      <button onClick={handleClickPlus}>+</button>
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
