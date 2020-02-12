import React, { useState, useMemo } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Route } from "react-router";

import CreateCharacterDialog from "./create-character-dialog";
import Character from "./character";
import { RosterState, addCharacter } from "./roster";
import CharacterList from "./character-list";
import CharacterLoader from "./character-loader";

interface StateProps {
    characters: Character[];
}

interface DispatchProps {
    addCharacter: (character: Character) => void;
}

const RosterController = ({ characters, addCharacter }: StateProps & DispatchProps) => {
    const [isShowingForm, setShowingForm] = useState<boolean>(false);

    const onCreate = (character: Character) => {
        addCharacter(character);
        setShowingForm(false);
    };

    return (
        <article>
            <h2>Roster</h2>
            {isShowingForm ? null : <button onClick={() => setShowingForm(true)}>New Character</button>}
            {isShowingForm ? <CreateCharacterDialog onCreate={onCreate} /> : null}
            <CharacterList characters={characters} />
            <Route path="/roster/:name">
                <CharacterLoader />
            </Route>
        </article>
    );
}

const mapStateToProps = ({ roster: { characters } }: { roster: RosterState }): StateProps => {
    return { characters };
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
    return {
        addCharacter: (character: Character) => dispatch(addCharacter(character))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RosterController);