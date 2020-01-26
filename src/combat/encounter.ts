import { Action, Reducer } from "redux";

import Combatant from "./combatant";

interface Encounter {
    combatants: Set<Combatant>;
    activeCombatant: Combatant | null;
    alreadyActedCombatants: Combatant[];
    notYetActedCombatants: Combatant[];
}

const createEncounter = (combatants: Set<Combatant>): Encounter => {
    if (combatants.size < 2) {
        throw new Error("An encounter must include at least two combatants");
    }

    return {
        combatants,
        notYetActedCombatants: Array.from(combatants).sort((a, b) => b.dexterity - a.dexterity),
        alreadyActedCombatants: [],
        activeCombatant: null
    };
}

const takeNextTurn = (encounter: Encounter): Encounter => {
    /*
     * Cases to consider:
     * - the first turn, where there is no active combatant yet and no previously acted combatants
     * - the last turn in the rotation, when there are no remaining combatants to act
     * - turns in the middle of the rotation, where there are a mix of combatants
     */
    return {
        ...encounter,
        activeCombatant: encounter.notYetActedCombatants.length === 0 ? encounter.alreadyActedCombatants[0] : encounter.notYetActedCombatants[0],
        notYetActedCombatants: encounter.notYetActedCombatants.length === 0 && encounter.activeCombatant != null ? [...encounter.alreadyActedCombatants.slice(1), encounter.activeCombatant] : encounter.notYetActedCombatants.slice(1),
        alreadyActedCombatants: encounter.notYetActedCombatants.length === 0 || encounter.activeCombatant == null ? [] : [...encounter.alreadyActedCombatants, encounter.activeCombatant]
    };
}

type EncounterActions = "START_ENCOUNTER" | "END_ENCOUNTER" | "NEXT_TURN";

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

interface NextTurnAction extends Action<EncounterActions> {
    type: "NEXT_TURN";
}

const nextTurn = (): NextTurnAction => ({ type: "NEXT_TURN" });

const isNextTurnAction = (action: Action): action is NextTurnAction => action.type === "NEXT_TURN";

type EncounterState = Encounter | null;

const encounter: Reducer<EncounterState, Action> = (state = null, action) => {
    if (isStartEncounterAction(action)) {
        return createEncounter(action.combatants);
    } else if (isEndEncounterAction(action)) {
        return null;
    } else if (isNextTurnAction(action)) {
        if (state == null) {
            throw new Error('Cannot take a turn when an encounter is not active');
        }
        return takeNextTurn(state);
    }
    return state;
}

export default Encounter;
export { createEncounter };
export { takeNextTurn };

export { startEncounter };
export { endEncounter };
export { nextTurn };

export { encounter };
export { EncounterState };