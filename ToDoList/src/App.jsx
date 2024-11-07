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
        checked: true,
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
    const [todo, setTodo] = useState(TODOS)
    function handleSubmit(event) {
        event.preventDefault();
        const INPUTS = document.querySelectorAll('input[type="text"]');
        // TRES INTERESSANT : transformer une chaine de caractère en int parseInt()
        INPUTS.forEach((element) => console.log(element.value));
        const newToDo = {
            todo: event.target[0].value,
            date: event.target[1].value,
            heure: parseInt(event.target[2].value),
            checked: event.target[4].checked,
            categorie: event.target[3].value
        }
        // "..." permet d'utiliser une COPIE du tableau todo.
        const tab = [...todo, newToDo]
        console.log(tab)

        setTodo(tab)
    }


    const [nettoyage, setNettoyage] = useState(true)
    const [formation, setFormation] = useState(true)
    const [maison, setMaison] = useState(true)

    const TODOLIST = todo.filter(element => {
        if (element.categorie == 'Nettoyage' && !nettoyage == true) {
            return false
        } else if (element.categorie == 'Formation' && !formation == true) {
            return false
        } else if (element.categorie == 'Maison' && !maison == true) {
            return false
        } return true
    })

    return (
        <Template>
            <h1>To-Do List</h1>
            <h3>Date du jour : {DATE.toLocaleString()}</h3>
            <Form onSubmit={(event) => handleSubmit(event)} />
            <section className="sectionFiltre">
                <label><input className="inputFiltre" type='checkbox' checked={nettoyage} onChange={() => setNettoyage(!nettoyage)}></input>Nettoyage</label>
                <label><input className="inputFiltre" type='checkbox' checked={formation} onChange={() => setFormation(!formation)}></input>Formation</label>
                <label><input className="inputFiltre" type='checkbox' checked={maison} onChange={() => setMaison(!maison)}></input>Maison</label>
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
