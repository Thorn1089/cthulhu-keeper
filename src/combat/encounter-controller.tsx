import React, { useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import Combatant from "./combatant";
import CreateEncounterDialog from "./create-encounter-dialog";
import CombatantList from "./combatant-list";
import ActiveCombatant from "./active-combatant";
import Encounter, { startEncounter, endEncounter, nextTurn } from "./encounter";
import { CombatState } from "./combat";

interface StateProps {
    encounter: Encounter | null;
}

interface DispatchProps {
    startEncounter: (combatants: Set<Combatant>) => void;
    endEncounter: () => void;
    nextTurn: () => void;
}

const createActiveEncounterArea = (encounter: Encounter, nextTurn: () => void) => {
    return (
        <article>
            <CombatantList {...encounter} />
            <ActiveCombatant {...encounter} />
            <aside>
                <button onClick={nextTurn}>Next Combatant</button>
            </aside>
        </article>
    );
};

const EncounterController = ({ encounter, startEncounter, endEncounter, nextTurn }: StateProps & DispatchProps) => {
    const [isShowingCreateDialog, toggleCreateDialog] = useState<boolean>(false);

    const onCreate = (combatants: Combatant[]) => {
        toggleCreateDialog(false);
        startEncounter(new Set(combatants));
    }

    return (
        <article>
            <h2>Encounter</h2>
            {encounter == null && !isShowingCreateDialog ? <button onClick={() => toggleCreateDialog(true)}>New Encounter</button> : null}
            {encounter != null ? <button onClick={() => endEncounter()}>End Encounter</button> : null}
            {isShowingCreateDialog ? <CreateEncounterDialog onCreate={onCreate} /> : null}
            {encounter != null ? createActiveEncounterArea(encounter, nextTurn) : null}
        </article>
    )
};

const mapStateToProps = ({ combat: { encounter } }: { combat: CombatState }): StateProps => {
    return { encounter };
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
    return {
        startEncounter: (combatants: Set<Combatant>) => dispatch(startEncounter(combatants)),
        endEncounter: () => dispatch(endEncounter()),
        nextTurn: () => dispatch(nextTurn())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EncounterController);