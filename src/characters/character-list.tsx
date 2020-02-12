import React from "react";

import Character from "./character";
import { NavLink } from "react-router-dom";

interface Props {
    characters: Character[];
}

const CharacterList = ({ characters }: Props) => {
    return (
        <section>
            <h2>Characters</h2>
            <ul>
                {characters.map((character, index) => {
                    return (
                        <li key={index}><NavLink to={`/roster/${character.name}`}>{character.name}</NavLink></li>
                    )
                })}
            </ul>
        </section>
    );
};

export default CharacterList;