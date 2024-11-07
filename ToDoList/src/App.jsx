import ToDo from './components/ToDo'
import Template from "./components/Template"
import "./App.css"
import Form from './components/Form'

const TODOS = [
    {
        todo : 'Sortir les poubelles',
        date : '07/11/2024',
        checked : false
    },
    {
        todo : 'Nettoyer la cuisine',
        date : '08/11/2024',
        checked : false
    },
    {
        todo : 'Ranger le bureau',
        date : '09/11/2024',
        checked : true
    }
]

function App() {
    const DATE = new Date();
    let count = 0;
    function handleSubmit(event){
        event.preventDefault()
        const INPUTS = document.querySelectorAll('input[type="text"]')
        INPUTS.forEach(element => console.log(element.value))
    }

    return (
        <Template>
        <h1>To-Do List</h1>
        <h3>Date du jour : {DATE.toLocaleString()}</h3>
        <ul className="list">
            {TODOS.map(todo => <ToDo key = {count++} todo={todo.todo} date={todo.date} checked={todo.checked}/>)}
        </ul>
        <Form onSubmit={(event) => handleSubmit(event)}/>
        </Template>
    )
}

export default App;
