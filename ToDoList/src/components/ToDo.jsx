import viteLogo from '/vite.svg'
import './ToDo.css'

// const DATE = new Date();
// const dateDuJour = DATE.toLocaleString()

function ToDo({todo, date}) {
    return <>
      <li>
        {todo} - {date}
      </li>
    </>
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

export default ToDo
