import viteLogo from "/vite.svg";
import "./ToDo.css";

// const DATE = new Date();
// const dateDuJour = DATE.toLocaleString()

function ToDo({ todo, date }) {
  return (
    <>
      <li>
        {todo} - {date}
      </li>
    </>
  );
}

function App() {
  const DATE = new Date();

  return (
    <>
      <h1>ToDo List</h1>
      <h2>{DATE.toLocaleString()}</h2>
      <ul>
        <ToDo todo={"Sortir les poubelles"} date={"07/11/2024"} />
        <ToDo todo={"Nettoyer la cuisine"} date={"08/11/2024"} />
        <ToDo todo={"Ranger le bureau"} date={"09/11/2024"} />
      </ul>
    </>
  );
}



// function ToDo({todo}, {date}) {
//   const dateDuJour = DATE.toLocaleString()

//   return <>
//     <h1>Tâches du jour</h1>
//     <h2>Date du jour : {dateDuJour}</h2>

//     <ul>
//       <li>Sortir les poubelles</li>
//       <li>Nettoyer la salle de bain</li>
//       <li>Ranger le bureau</li>
//     </ul>

//   </>
// }

export default App;
