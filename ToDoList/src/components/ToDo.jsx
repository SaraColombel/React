import viteLogo from "/vite.svg"
import "./ToDo.css"

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

export default ToDo
