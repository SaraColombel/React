import ToDo from './components/ToDo'
import Template from "./components/Template"

const TODOS = [
    {
        todo : 'Sortir les poubelles',
        date : '07/11/2024'
    },
    {
        todo : 'Nettoyer la cuisine',
        date : '08/11/2024'
    },
    {
        todo : 'Ranger le bureau',
        date : '09/11/2024'
    }
]

function App() {
    const DATE = new Date();
    let count = 0;

    return (
        <Template>
        <h1>To-Do List</h1>
        <h3>Date du jour : {DATE.toLocaleString()}</h3>
        <ul>
            {TODOS.map(todo => <ToDo key = {count++} todo={todo.todo} date={todo.date} />)}
        </ul>
        </Template>
    )
}

export default App;
