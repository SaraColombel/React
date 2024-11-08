import { useState } from 'react'
import './ToDoList.css'

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
                <p className="h">Durée : <strong>{heure}</strong></p>
                <div className='buttons'>
                    <button className="buttonToDo" onClick={handleClickMinus}>-</button>
                    <button className="buttonToDo" onClick={handleClickPlus}>+</button>
                </div>
            </li>
        );
    }
    return (
        <li className="orange">
            <p>{date} | <strong>{todo}</strong></p>
            <p className="h">Durée : <strong>{heure}</strong></p>
            <div className='buttons'>
                <button className="buttonToDo" onClick={handleClickMinus}>-</button>
                <button className="buttonToDo" onClick={handleClickPlus}>+</button>
            </div>
        </li>
    );
}

const CATEGORIES = ["Nettoyage", "Formation", "Maison"]

function Form({ onSubmit }) {
    function handleChange(event) {
        console.log(event.target.value);
    }
    return (
        <form onSubmit={onSubmit} className='formToDo'>
            <input className='input'
                type="text"
                placeholder="Tâche"
                onChange={(event) => handleChange(event)}
            ></input>
            <input className='inputDate'
                type="text"
                placeholder="Date"
                onChange={(event) => handleChange(event)}
            ></input>
            <input className='inputHeureRestante'
                type="number"
                placeholder="Durée"
                onChange={(event) => handleChange(event)}
            ></input>
            <select className='input'
                placeholder="Catégorie"
                onChange={(event) => handleChange(event)}>
                <option value="Vide">Catégories</option>
                {CATEGORIES.map((element, index) => <option key={index} value={element}>{element}</option>)}
            </select>
            <label className="checkboxfait"><input type="checkbox" ></input>Fait</label>
            <input type="submit" className='Envoyer'></input>
        </form>
    );
}

function Template({ children }) {
    return (
        <>
            <header className="navbar">
                <img className="logoImg" src="https://picsum.photos/120/120" />
                <h1>Header</h1>
                <nav className="nav">
                    <ul>
                        <li>Accueil</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>

            <main className="main">
                {children}
            </main>

            <footer className="footer">
                <h1>Footer</h1>
                <ul>
                    <li>Mentions légales</li>
                    <li>Politique de confidientialité</li>
                </ul>
            </footer>
        </>
    )
}

function ToDoList() {
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

    return <>
        <h1>ToDoList</h1>
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
    </>
}

export default ToDoList