import "./Card.css";

function Card({ image, pseudo, email, description, sexe }) {
    return (
    <article
        className={sexe}
        onMouseEnter={(event) => event.target.classList.add("border")}
        onMouseOut={(event) => event.target.classList.remove("border")}
    >
        <img src={image} />
        <h2>{pseudo} </h2>
        <h3>{email}</h3>
        <p>{description}</p>
    </article>
    );
}

export default Card;
