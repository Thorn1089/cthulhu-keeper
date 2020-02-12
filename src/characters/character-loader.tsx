import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";

import { RosterState } from "./roster";
import Character from "./character";
import CharacterDetails from "./character-details";

interface StateProps {
    characters: Character[];
}

const CharacterLoader = ({ characters }: StateProps) => {
    const { name } = useParams();

    const match = characters.find(c => c.name === name);

    return (
        match ? <CharacterDetails character={match} /> : <h3>Not Found</h3>
    );
};

const mapStateToProps = ({ roster: { characters } }: { roster: RosterState }) => {
    return { characters };
}

export default connect(mapStateToProps)(CharacterLoader);