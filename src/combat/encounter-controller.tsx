import React, { useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import Combatant from "./combatant";
import CreateEncounterDialog from "./create-encounter-dialog";
import CombatantList from "./combatant-list";
import Encounter, { EncounterState, startEncounter, endEncounter } from "./encounter";
import { CombatState } from "./combat";

interface StateProps {
    encounter: Encounter | null;
}

interface DispatchProps {
    startEncounter: (combatants: Set<Combatant>) => void;
    endEncounter: () => void;
}

const EncounterController = ({ encounter, startEncounter, endEncounter }: StateProps & DispatchProps) => {
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
            {encounter != null ? <CombatantList {...encounter} /> : null}
        </article>
    )
};

const mapStateToProps = ({ encounter }: CombatState): StateProps => {
    return { encounter };
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
    return {
        startEncounter: (combatants: Set<Combatant>) => dispatch(startEncounter(combatants)),
        endEncounter: () => dispatch(endEncounter())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EncounterController);