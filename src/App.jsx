import React from "react";

//Components
import { Card } from "./presentation/Card/Card";
import { Characters } from "./domain/info/Characters";

function App() {
return (
    <React.Fragment>
    {Characters.map((character, index) => (
        //passing all properties as props by using the spread operator
    <Card key={index} {...character}></Card>
    ))}
    </React.Fragment>
);
}

export { App };