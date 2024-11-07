import "./Card.css";
import { useState } from "react";

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
        <div className="divLike">
            <button className="divLike" onClick={event => handleClick(event)}> Like : {like}</button>
        </div>
    </>
}

function Card({ image, pseudo, email, description, sexe }) {
    return (
        <article className={sexe}>
            <img src={image} />
            <h2>{pseudo} </h2>
            <h3>{email}</h3>
            <p>{description}</p>
            <Like />
        </article>
    );
}

export default Card;
