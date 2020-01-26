import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { combat } from "./combat/combat";
import EncounterController from "./combat/encounter-controller";

const Application = () => {
    const store = createStore(combat);

    return (
        <Provider store={store}>
            <nav>

            </nav>
            <main>
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