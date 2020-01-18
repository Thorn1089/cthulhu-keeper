import { createCombatant } from "./combatant";

test("Empty names are not allowed", () => {
    expect(() => createCombatant("", 50)).toThrow();
    expect(() => createCombatant(" ", 50)).toThrow();
    expect(() => createCombatant("\t\r\n", 50)).toThrow();
});

test("Out-of-bounds attribute values are not allowed", () => {
    expect(() => createCombatant("William Harvey", 0)).toThrow();
    expect(() => createCombatant("William Harvey", -50)).toThrow();
});