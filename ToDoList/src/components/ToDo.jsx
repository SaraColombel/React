import viteLogo from "/vite.svg";
import "./ToDo.css";
import Template from "./Template"

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
      <Template>
        <h1>ToDo List</h1>
        <h2>{DATE.toLocaleString()}</h2>
        <ul>
          <ToDo todo={"Sortir les poubelles"} date={"07/11/2024"} />
          <ToDo todo={"Nettoyer la cuisine"} date={"08/11/2024"} />
          <ToDo todo={"Ranger le bureau"} date={"09/11/2024"} />
        </ul>
      </Template>
    </>
  );
}

export default App;
