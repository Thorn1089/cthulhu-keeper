import React from "react";
import ReactDOM from "react-dom";

import Application from "./application";

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        React.createElement(Application), 
        document.getElementById("app"), 
        () => console.log("Application loaded"));
});