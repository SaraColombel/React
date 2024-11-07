import "./Card.css";

function Card({ image, pseudo, email, description, sexe }) {
  return (
    <article
      className={sexe}
      onMouseOver={(event) => event.target.classList.add("border")}
      onMouseOut={(event) => event.target.classList.remove("border")}
    >
      <img
        src={image}
        onMouseOver={(event) => event.stopPropagation()}
        onMouseOut={(event) => event.stopPropagation()}
      />
      <h2
        onMouseOver={(event) => event.stopPropagation()}
        onMouseOut={(event) => event.stopPropagation()}
      >
        {pseudo}{" "}
      </h2>
      <h3
        onMouseOver={(event) => event.stopPropagation()}
        onMouseOut={(event) => event.stopPropagation()}
      >
        {email}
      </h3>
      <p
        onMouseOver={(event) => event.stopPropagation()}
        onMouseOut={(event) => event.stopPropagation()}
      >
        {description}
      </p>
    </article>
  );
}

export default Card;
