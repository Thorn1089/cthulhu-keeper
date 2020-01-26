import React from "react";

import Combatant from "./combatant";

interface Props {
    combatants: Set<Combatant>;
}

const CombatantList = ({ combatants }: Props) => {
    const items = Array.from(combatants).map(combatant => <li key={combatant.name}>{combatant.name}</li>);

    return (
        <section>
            <h2>Combatants</h2>
            <ul>{items}</ul>
        </section>
    );
}

export default CombatantList;