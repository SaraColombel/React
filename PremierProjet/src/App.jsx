import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './components/List'

const date = new Date()

function App() {
  const localDate = date.toLocaleString()
  
  return <>
      <h1>Mon Premier Site</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo delectus enim eos officia dolor sint ut aut blanditiis repellendus facilis sequi nam doloremque voluptatibus a cumque, quas distinctio. Doloremque, dolore.</p>

      <p>Timestamp : {Date.now()}</p>
      <h2>Date du jour : {localDate}</h2>
      
      <List />
    </>
}

export default App
