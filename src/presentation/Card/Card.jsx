import React from "react";
import "./card.scss";

function Card({ name, universe, alterego, occupation, friends, superpower, info, url }) {
  return (
    <div className="card">
      <div>
        <h2 className="card__title">{name}</h2>
        <p><span className="card__category">Universe: </span>{universe}</p>
        <p><span className="card__category">Alter ego: </span>{alterego}</p>
        <p><span className="card__category">Occupation: </span>{occupation}</p>
        <p><span className="card__category">Friends: </span>{friends}</p>
        <p><span className="card__category">Superpower: </span>{superpower}</p>
        <details>
          <summary className="card__details">Details</summary>
          <p>{info}</p>
        </details>
      </div>
      <img src={url} alt={name} className="card__image" />
    </div>
  );
}

export { Card };