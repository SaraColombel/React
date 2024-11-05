import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

const BATMAN = {image : "https://picsum.photos/200/200", pseudo : "Batman", email : "batmangotham@gmail.com", description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis incidunt doloremque, adipisci iste excepturi dolores beatae. Dolore modi omnis quam quidem mollitia esse corrupti sint accusantium, eius magni! Dignissimos, dolorum."};

const ROBIN = {image : "https://picsum.photos/200/200", pseudo : "Robin", email : "robingotham@gmail.com", description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis incidunt doloremque, adipisci iste excepturi dolores beatae. Dolore modi omnis quam quidem mollitia esse corrupti sint accusantium, eius magni! Dignissimos, dolorum."};

const JOKER = {image : "https://picsum.photos/200/200", pseudo : "Joker", email : "jokergotham@gmail.com", description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis incidunt doloremque, adipisci iste excepturi dolores beatae. Dolore modi omnis quam quidem mollitia esse corrupti sint accusantium, eius magni! Dignissimos, dolorum."};


function App() {
  return (
    <>
      <h1 className = "ThistleColor">Liste des Utilisateurs</h1>
      <Card image = {BATMAN.image} pseudo = {BATMAN.pseudo} email = {BATMAN.email} description = {BATMAN.description} />
      <Card image = {ROBIN.image} pseudo = {ROBIN.pseudo} email = {ROBIN.email} description = {ROBIN.description} />
      <Card image = {JOKER.image} pseudo = {JOKER.pseudo} email = {JOKER.email} description = {JOKER.description} />
    </>
  )
}

export default App
