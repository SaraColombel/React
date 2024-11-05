import ToDo from './components/ToDo'

function App() {
  return <ul>
    <ToDo todo={'Sortir les poubelles'} date = {'04/11/2024'}/>
    <ToDo todo={'Nettoyer la cuisine'} date = {'04/11/2024'}/>
    <ToDo todo={'Ranger le bureau'} date = {'05/11/2024'}/>
  </ul>
}

export default App