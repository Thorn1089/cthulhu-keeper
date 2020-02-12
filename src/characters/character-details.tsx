import React from "react";

import Character, { Characteristic } from "./character";

interface Props {
    character: Character;
}

const CharacterDetails = ({ character }: Props) => {
    const showCharacteristic = (characteristic: Characteristic) => {
        return (
            <>
                <dt>{characteristic}</dt>
                <dd>{character.characteristics[characteristic]}</dd>
            </>
        )
    }

    return (
        <aside>
            <h3>{character.name}</h3>

            <h4>Characteristics</h4>
            <dl>
                {showCharacteristic(Characteristic.Strength)}
                {showCharacteristic(Characteristic.Dexterity)}
                {showCharacteristic(Characteristic.Intelligence)}
                {showCharacteristic(Characteristic.Constitution)}
                {showCharacteristic(Characteristic.Appearance)}
                {showCharacteristic(Characteristic.Power)}
                {showCharacteristic(Characteristic.Size)}
                {showCharacteristic(Characteristic.Education)}
                {showCharacteristic(Characteristic.Sanity)}
            </dl>

            <h4>Notes</h4>
            <p>
                {character.notes}
            </p>
        </aside>
    );
};

export default CharacterDetails;