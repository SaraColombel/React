import ToDo from "./components/ToDo";
import Template from "./components/Template";
import "./App.css";
import Form from "./components/Form";
import { useState } from "react"

const TODOS = [
    {
        todo: "Sortir les poubelles",
        date: "07/11/2024",
        checked: false,
        heure: 12,
        categorie: "Nettoyage",
    },
    {
        todo: "Nettoyer la cuisine",
        date: "08/11/2024",
        checked: false,
        heure: 10,
        categorie: "Maison",
    },
    {
        todo: "Ranger le bureau",
        date: "09/11/2024",
        checked: true,
        heure: 16,
        categorie: "Formation",
    },
];

function App() {
    const DATE = new Date();
    let count = 0;
    function handleSubmit(event) {
        event.preventDefault();
        const INPUTS = document.querySelectorAll('input[type="text"]');
        INPUTS.forEach((element) => console.log(element.value));
    }

    const [nettoyage, setNettoyage] = useState(true)
    const [formation, setFormation] = useState(true)
    const [maison, setMaison] = useState(true)

    const TODOLIST = TODOS.filter(element => {
        if(element.categorie == 'Nettoyage' && !nettoyage == true){
            return false
        } else if (element.categorie == 'Formation' && !formation == true){
            return false
        } else if(element.categorie == 'Maison' && !maison == true){
            return false
        } return true
    })

    return (
        <Template>
            <h1>To-Do List</h1>
            <h3>Date du jour : {DATE.toLocaleString()}</h3>
            <Form onSubmit={(event) => handleSubmit(event)} />
            <section className="sectionFiltre">
                <label><input type='checkbox' checked={nettoyage} onChange={()=>setNettoyage(!nettoyage)}></input>Nettoyage</label>
                <label><input type='checkbox' checked={formation} onChange={()=>setFormation(!formation)}></input>Formation</label>
                <label><input type='checkbox' checked={maison} onChange={()=>setMaison(!maison)}></input>Maison</label>
            </section>
            <ul className="list">
                {TODOLIST.map((todo) => (
                    <ToDo
                        key={count++}
                        todo={todo.todo}
                        date={todo.date}
                        checked={todo.checked}
                        heureRestante={todo.heure}
                    />
                ))}
            </ul>
        </Template>
    );
}

export default App;
