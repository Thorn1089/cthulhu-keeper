import React from "react";

import Combatant from "./combatant";

interface Props {
    activeCombatant: Combatant | null;
}

const ActiveCombatant = ({ activeCombatant }: Props) => {
    return (
        <section>
            <h2>Active Combatant</h2>
            <h3>{activeCombatant == null ? 'No Active Combatant' : activeCombatant.name}</h3>
        </section>
    );
};

export default ActiveCombatant;