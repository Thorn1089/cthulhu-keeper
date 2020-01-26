import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { combat } from "./combat/combat";
import EncounterController from "./combat/encounter-controller";

const Application = () => {
    const store = createStore(combat);

    return (
        <Provider store={store}>
            <Router>
                <nav>
                    <NavLink to="/encounter">Encounter</NavLink>
                </nav>
                <main>
                    <Route path="/encounter">
                        <EncounterController />
                    </Route>
                </main>
            </Router>
        </Provider>
    );
}

export default Application;