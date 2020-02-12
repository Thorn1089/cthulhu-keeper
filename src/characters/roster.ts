import { Reducer, Action } from "redux";

import Character from "./character";

interface RosterState {
    characters: Character[];
}

type RosterActions = "ADD_CHARACTER";

interface AddCharacterAction extends Action<RosterActions> {
    type: "ADD_CHARACTER";
    character: Character;
}

const addCharacter = (character: Character): AddCharacterAction => ({ type: "ADD_CHARACTER", character });

const isAddCharacterAction = (action: Action): action is AddCharacterAction => action.type === "ADD_CHARACTER";

const roster: Reducer<RosterState, Action> = (state = { characters: [] }, action) => {
    if (isAddCharacterAction(action)) {
        return { characters: [...state.characters, action.character] };
    }
    return { ...state };
}

export { RosterState };
export { roster };
export { addCharacter };