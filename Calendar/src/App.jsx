import './App.css'

const MONTH = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']

const DAY = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']

const DAY_LETTER = DAY.map(jour => jour.charAt(0))
const DAY_LETTER2 = DAY.map(jour => jour[0])


function Day({jour, className}){
  return ( 
    <div className = {className}>
      {jour}
    </div>
    )
}

function App() {
  const ROW = []
  for(let i = 1; i <= 31; i++){
    ROW.push(<Day key={i} className = {'backgroundOrange'} jour = {i}/>)
  }
  let count = 0;
  return (
    <article className="card">
      <Day className={'month'} jour={MONTH[9]} />
      <section className="grid-7">
        {DAY_LETTER.map(jour => <Day key = {count++} jour = {jour}/>)}
      </section>
      <section className='grid-7 days'>
        {ROW}
      </section>
    </article>
  )
}

export default App
