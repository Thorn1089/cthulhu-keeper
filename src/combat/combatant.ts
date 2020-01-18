interface Combatant {
    name: string;
    dexterity: number;
}

const createCombatant = (name: string, dexterity: number): Combatant => {
    if(name.trim().length === 0) {
        throw new Error("Combatant name cannot be blank");
    }
    if(dexterity < 1) {
        throw new Error("Cannot have a DEX score less than 1");
    }
    return { name, dexterity };
}

export default Combatant;
export { createCombatant };