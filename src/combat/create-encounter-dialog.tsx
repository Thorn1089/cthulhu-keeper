import React from "react";
import { Formik, Form, FieldArray, Field } from "formik";

import Combatant from "./combatant";

interface FormValues {
    combatants: Combatant[];
}

interface Props {
    onCreate: (combatants: Combatant[]) => void;
}

const CreateEncounterDialog = ({ onCreate }: Props) => {
    return (
        <Formik<FormValues> initialValues={{ combatants: [] }} onSubmit={({ combatants }) => onCreate(combatants)}>
            {({ values }) => {
                return (
                    <Form>
                        <FieldArray name="combatants">
                            {({ push }) => {
                                return (
                                    <>
                                        {values.combatants.map((combatant, index) => {
                                            return (
                                                <fieldset key={index}>
                                                    <label>Name</label>
                                                    <Field name={`combatants.${index}.name`} />
                                                    <label>DEX</label>
                                                    <Field name={`combatants.${index}.dexterity`} />
                                                </fieldset>
                                            );
                                        })}
                                        <button type="button" onClick={() => push({ name: '', dexterity: '' })}>Add Combatant</button>
                                    </>
                                )
                            }}
                        </FieldArray>

                        <input type="submit" value="Start Encounter" />
                    </Form>
                );
            }}
        </Formik>
    );
}

export default CreateEncounterDialog;