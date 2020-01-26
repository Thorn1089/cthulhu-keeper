import Combatant from "./combatant";
import { Action, Reducer } from "redux";

interface Encounter {
    combatants: Set<Combatant>;
}

const createEncounter = (combatants: Set<Combatant>): Encounter => {
    if (combatants.size < 2) {
        throw new Error("An encounter must include at least two combatants");
    }
    return { combatants };
}

type EncounterActions = "START_ENCOUNTER";

interface StartEncounterAction extends Action<EncounterActions> {
    type: "START_ENCOUNTER";
    combatants: Set<Combatant>;
}

const startEncounter = (combatants: Set<Combatant>): StartEncounterAction => ({ type: "START_ENCOUNTER", combatants });

const isStartEncounterAction = (action: Action): action is StartEncounterAction => action.type === "START_ENCOUNTER";

interface EncounterState {
    encounter: Encounter | null;
}

const encounter: Reducer<EncounterState, Action> = (state = { encounter: null }, action) => {
    if (isStartEncounterAction(action)) {
        return { encounter: createEncounter(action.combatants) };
    }
    return state;
}

export default Encounter;
export { createEncounter };
export { startEncounter };
export { encounter };
export { EncounterState };