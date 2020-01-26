import React, { useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import Combatant from "./combatant";
import CreateEncounterDialog from "./create-encounter-dialog";
import CombatantList from "./combatant-list";
import Encounter, { EncounterState, startEncounter } from "./encounter";

interface StateProps {
    encounter: Encounter | null;
}

interface DispatchProps {
    startEncounter: (combatants: Set<Combatant>) => void;
}

const EncounterController = ({ encounter, startEncounter }: StateProps & DispatchProps) => {
    const [isShowingCreateDialog, toggleCreateDialog] = useState<boolean>(false);

    const onCreate = (combatants: Combatant[]) => {
        toggleCreateDialog(false);
        startEncounter(new Set(combatants));
    }

    return (
        <article>
            <h2>Encounter</h2>
            {encounter == null && !isShowingCreateDialog ? <button onClick={() => toggleCreateDialog(true)}>New Encounter</button> : null}
            {isShowingCreateDialog ? <CreateEncounterDialog onCreate={onCreate} /> : null}
            {encounter != null ? <CombatantList {...encounter} /> : null}
        </article>
    )
};

const mapStateToProps = ({ encounter }: EncounterState): StateProps => {
    return { encounter };
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
    return { startEncounter: (combatants: Set<Combatant>) => dispatch(startEncounter(combatants)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(EncounterController);