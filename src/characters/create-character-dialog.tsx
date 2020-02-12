import React from "react";
import { Formik, Form, Field } from "formik";
import Character, { Characteristic } from "./character";

const defaultCharacter: Character = {
    name: '',
    notes: '',
    characteristics: {
        [Characteristic.Strength]: 50,
        [Characteristic.Dexterity]: 50,
        [Characteristic.Intelligence]: 50,
        [Characteristic.Constitution]: 50,
        [Characteristic.Appearance]: 50,
        [Characteristic.Power]: 50,
        [Characteristic.Size]: 50,
        [Characteristic.Education]: 50,
        [Characteristic.Sanity]: 50
    }
}

interface Props {
    onCreate: (character: Character) => void;
}

const CreateCharacterDialog = ({ onCreate }: Props) => {
    return (
        <Formik<Character> initialValues={defaultCharacter} onSubmit={onCreate}>
            {() => {
                return (
                    <Form>
                        <fieldset>
                            <legend>Info</legend>
                            <label>Name</label>
                            <Field name="name" />
                            <label>Notes</label>
                            <Field name="notes" as="textarea" />
                        </fieldset>

                        <fieldset>
                            <legend>Characteristics</legend>
                            <label>STR</label>
                            <Field name={`characteristics.${Characteristic.Strength}`} />
                            <label>DEX</label>
                            <Field name={`characteristics.${Characteristic.Dexterity}`} />
                            <label>INT</label>
                            <Field name={`characteristics.${Characteristic.Intelligence}`} />
                            <label>CON</label>
                            <Field name={`characteristics.${Characteristic.Constitution}`} />
                            <label>APP</label>
                            <Field name={`characteristics.${Characteristic.Appearance}`} />
                            <label>POW</label>
                            <Field name={`characteristics.${Characteristic.Power}`} />
                            <label>SIZ</label>
                            <Field name={`characteristics.${Characteristic.Size}`} />
                            <label>EDU</label>
                            <Field name={`characteristics.${Characteristic.Education}`} />
                            <label>SAN</label>
                            <Field name={`characteristics.${Characteristic.Sanity}`} />
                        </fieldset>

                        <button type="submit">Create Character</button>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default CreateCharacterDialog;