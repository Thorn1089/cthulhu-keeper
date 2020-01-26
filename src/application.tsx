import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import EncounterController from "./combat/encounter-controller";
import { encounter } from "./combat/encounter";

const Application = () => {
    const store = createStore(encounter);

    return (
        <Provider store={store}>
            <nav>

            </nav>
            <main>
                <h1>Hello, World!</h1>
                <Router>
                    <Route path="/encounter">
                        <EncounterController />
                    </Route>
                </Router>
            </main>
        </Provider>
    );
}

export default Application;