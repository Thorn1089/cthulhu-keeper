import Encounter, { encounter } from "./encounter";
import { Reducer, Action } from "redux";

interface CombatState {
    encounter: Encounter | null;
}

const combat: Reducer<CombatState, Action> = (state = { encounter: null }, action) => {
    return { encounter: encounter(state.encounter, action) };
}

export { CombatState };
export { combat };