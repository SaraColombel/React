import './Card.css'

function Card({image, pseudo, email, description}){
    return <article className = 'card'>
        <img src = {image}/>
        <h2>{pseudo}</h2>
        <h3>{email}</h3>
        <p>{description}</p>
    </article>
}

export default Card