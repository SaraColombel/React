import { useState } from "react";
import './CardUser.css'

const USER = [
    {
        image: "https://picsum.photos/200/200",
        pseudo: "Batman",
        email: "batmangotham@gmail.com",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis incidunt doloremque, adipisci iste excepturi dolores beatae. Dolore modi omnis quam quidem mollitia esse corrupti sint accusantium, eius magni! Dignissimos, dolorum.",
        sexe: "homme",
    },
    {
        image: "https://picsum.photos/200/200",
        pseudo: "Robin(e)",
        email: "robingotham@gmail.com",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis incidunt doloremque, adipisci iste excepturi dolores beatae. Dolore modi omnis quam quidem mollitia esse corrupti sint accusantium, eius magni! Dignissimos, dolorum.",
        sexe: "femme",
    },
    {
        image: "https://picsum.photos/200/200",
        pseudo: "Joker",
        email: "jokergotham@gmail.com",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis incidunt doloremque, adipisci iste excepturi dolores beatae. Dolore modi omnis quam quidem mollitia esse corrupti sint accusantium, eius magni! Dignissimos, dolorum.",
        sexe: "non-binaire",
    },
    {
        image: "https://picsum.photos/200/200",
        pseudo: "Marie Curry",
        email: "mariecurrie@gmail.com",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis incidunt doloremque, adipisci iste excepturi dolores beatae. Dolore modi omnis quam quidem mollitia esse corrupti sint accusantium, eius magni! Dignissimos, dolorum.",
        sexe: "femme",
    },
    
];

function CardUser() {
    let count = 0;
    const [search, setSearch] = useState('')
    const USERS_LIST = USER.filter(element => {
        if (!element.pseudo.includes(search)) {
            return false
        } else {
            return true
        }
    })
    if (USER.length > 0) {
        return (
            <>
                <h1>Liste des Utilisateurs</h1>
                <p className="nbreInscrits">Il y a {USER.length} utilisateurs inscrits !</p>
                <input type="text" className="searchBar" placeholder="Recherche" onChange={(event) => setSearch(event.target.value)}></input>
                <div className="center">
                    {USERS_LIST.map((user) => (
                        <Card
                            key={count++}
                            image={user.image}
                            pseudo={user.pseudo}
                            email={user.email}
                            description={user.description}
                            sexe={user.sexe}
                        />
                    ))}
                </div>
            </>
        );
    }
    return <>
        <h1>CardUser</h1>
        <h1>Aucun utilisateur d'inscrit</h1>

    </>
}

// function Compteur() {
//     const [count, setCount] = useState(0)

//     return <>
//         <p>Compteur : {count}</p>
//         <button onClick={() => setCount(count + 1)}>Ajouter 1</button>
//     </>
// }

function Like() {
    const [like, setLike] = useState(4)
    function handleClick(event) {
        event.target.classList.toggle('like')
        if (event.target.classList.contains('like')) {
            setLike(like + 1)
        } else {
            setLike(like - 1)
        }
    }
    return <>
        <div>
            <button className="buttonCardUser" onClick={event => handleClick(event)}> Like : {like}</button>
        </div>
    </>
}

function Card({ image, pseudo, email, description, sexe }) {
    return (
            <article className={sexe + ' articlesCardUser'}>
                <img className="imgCardUser" src={image} />
                <h2>{pseudo} </h2>
                <h3>{email}</h3>
                <p>{description}</p>
                <Like />
            </article>
    );
}

export default CardUser