import { createCombatant } from "./combatant";
import { createEncounter } from "./encounter";

test("Meaningless encounters are not allowed", () => {
    expect(() => createEncounter(new Set([]))).toThrow();
    expect(() => createEncounter(new Set([createCombatant("William Harvey", 50)]))).toThrow();
})