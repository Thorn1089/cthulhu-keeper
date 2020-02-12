import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import { combat } from "./combat/combat";
import EncounterController from "./combat/encounter-controller";

import { roster } from "./characters/roster";
import RosterController from "./characters/roster-controller";

//TODO - persist data in IndexedDB instead of localStorage
const Application = () => {
    const savedCharacters = JSON.parse(localStorage.getItem('characters') ?? '[]');

    const store = createStore(combineReducers({
        combat,
        roster
    }), { roster: { characters: savedCharacters } });

    useEffect(() => {
        return store.subscribe(() => {
            const { roster } = store.getState();
            localStorage.setItem('characters', JSON.stringify(roster.characters));
        });
    }, [store]);

    return (
        <Provider store={store}>
            <Router>
                <nav>
                    <NavLink to="/roster">Roster</NavLink>
                    <NavLink to="/encounter">Encounter</NavLink>
                </nav>
                <main>
                    <Route path="/roster">
                        <RosterController />
                    </Route>
                    <Route path="/encounter">
                        <EncounterController />
                    </Route>
                </main>
            </Router>
        </Provider>
    );
}

export default Application;