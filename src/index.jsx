import React from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/global.scss";
import "./assets/styles/app.scss";
import "./presentation/Card/card.scss";
import favicon from "./assets/images/favicon.png";
import { App } from "./App";

const root = createRoot(document.getElementById("root"));
root.render(<App />);

const pageFavicon = document.createElement("link");
pageFavicon.rel = "shortcut icon";
pageFavicon.href = favicon;
document.head.append(pageFavicon);
