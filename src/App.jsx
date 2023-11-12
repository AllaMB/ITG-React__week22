import React from "react";
//Components
import { Card } from "./presentation/Card/Card";
import { Characters } from "./domain/info/Characters";
import "./presentation/Card/card.scss";


function App() {
return (
    <React.Fragment>
    {Characters.map((character, index) => (
        //passing all properties as props by using the spread operator
        <a
        key={index}
        href={`https://fr.wikipedia.org/wiki/${character.name}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
    >
    <Card key={index} {...character}></Card>
    </a>
    ))}
    </React.Fragment>
);
}

export { App };