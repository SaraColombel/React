import ToDoTernaire from './components/ToDo'
import Template from "./components/Template"
import "./App.css"

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
console.log(TODOS);

function App() {
    const DATE = new Date();
    let count = 0;

    return (
        <Template>
        <h1>To-Do List</h1>
        <h3>Date du jour : {DATE.toLocaleString()}</h3>
        <ul>
            {TODOS.map(todo => <ToDoTernaire key = {count++} todo={todo.todo} date={todo.date} checked={todo.checked}/>)}
        </ul>
        </Template>
    )
}

export default App;
