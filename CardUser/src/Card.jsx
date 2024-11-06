import './Card.css'

function Card({image, pseudo, email, description, sexe}){
    return <article className = {sexe}>
        <img src = {image}/>
        <h2>{pseudo}</h2>
        <h3>{email}</h3>
        <p>{description}</p>
    </article>
}

export default Card