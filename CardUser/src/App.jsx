import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card";

const USER = [
  {
    image: "https://picsum.photos/200/200",
    pseudo: "Batman",
    email: "batmangotham@gmail.com",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis incidunt doloremque, adipisci iste excepturi dolores beatae. Dolore modi omnis quam quidem mollitia esse corrupti sint accusantium, eius magni! Dignissimos, dolorum.",
    sexe: "homme",
  },
  {
    image: "https://picsum.photos/200/200",
    pseudo: "Robin(e)",
    email: "robingotham@gmail.com",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis incidunt doloremque, adipisci iste excepturi dolores beatae. Dolore modi omnis quam quidem mollitia esse corrupti sint accusantium, eius magni! Dignissimos, dolorum.",
    sexe: "femme",
  },
  {
    image: "https://picsum.photos/200/200",
    pseudo: "Joker",
    email: "jokergotham@gmail.com",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis incidunt doloremque, adipisci iste excepturi dolores beatae. Dolore modi omnis quam quidem mollitia esse corrupti sint accusantium, eius magni! Dignissimos, dolorum.",
    sexe: "non-binaire",
  },
];

// function App() {
//   let count = 0;
//   return (
//     <>
//       <h1 className="ThistleColor">Liste des Utilisateurs</h1>
//       {USER.map((user) => (
//         <Card
//           key={count++}
//           image={user.image}
//           pseudo={user.pseudo}
//           email={user.email}
//           description={user.description}
//         />
//       ))}
//     </>
//   );
// }

function App() {
  let count = 0;
  if (USER.length > 0) {
    return (
      <>
        <h1 className="ThistleColor">Liste des Utilisateurs</h1>
        <p>Il y a {USER.length} utilisateurs inscrits !</p>
        <div class="center">
          {USER.map((user) => (
            <Card
              key={count++}
              image={user.image}
              pseudo={user.pseudo}
              email={user.email}
              description={user.description}
              sexe={user.sexe}
            />
          ))}
        </div>
      </>
    );
  }
  return <h1 className="ThistleColor">Aucun utilisateur d'inscrit</h1>;
}

export default App;

function Compteur (){
  const [count, setCount] = useState(0)

  return <>
  <p>Compteur : {count}</p>
  <button onClick={()=>setCount(count + 1)}>Ajouter 1</button>
  </>
}