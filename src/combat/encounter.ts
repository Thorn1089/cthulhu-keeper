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

type EncounterActions = "START_ENCOUNTER" | "END_ENCOUNTER";

interface StartEncounterAction extends Action<EncounterActions> {
    type: "START_ENCOUNTER";
    combatants: Set<Combatant>;
}

const startEncounter = (combatants: Set<Combatant>): StartEncounterAction => ({ type: "START_ENCOUNTER", combatants });

const isStartEncounterAction = (action: Action): action is StartEncounterAction => action.type === "START_ENCOUNTER";

interface EndEncounterAction extends Action<EncounterActions> {
    type: "END_ENCOUNTER";
}

const endEncounter = (): EndEncounterAction => ({ type: "END_ENCOUNTER" });

const isEndEncounterAction = (action: Action): action is EndEncounterAction => action.type === "END_ENCOUNTER";

type EncounterState = Encounter | null;

const encounter: Reducer<EncounterState, Action> = (state = null, action) => {
    if (isStartEncounterAction(action)) {
        return createEncounter(action.combatants);
    } else if (isEndEncounterAction(action)) {
        return null;
    }
    return state;
}

export default Encounter;
export { createEncounter };
export { startEncounter };
export { endEncounter };
export { encounter };
export { EncounterState };