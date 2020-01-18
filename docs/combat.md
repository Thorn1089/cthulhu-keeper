# Combat

Combat in Call of Cthulhu is fairly straightforward.

## Turn Order

Turn order is based on the combatant's DEX stat ordinarily.
In certain circumstances the keeper may elect to let another combatant act first, or delay a combatant.
Additionally, characters with a readied firearm (that is, already drawn) act on DEX + 50.

## Health and Damage

Combatants have Hit Points and optionally, Armor.
Armor acts as a straight reduction of damage.

If a character ever takes half or more of their total HP in damage, they receive a Major Wound.
A CON check must immediately be made to stay conscious.
Unconscious characters forfeit future turns until revived (or until dead).

If a character's HP drops to or below 0, they must immediately make a CON check.
If they fail, but have not received a Major Wound, they are unconscious.
If they *have* received a Major Wound, they are Dying.
Dying characters continue to make CON checks each round until they are stabilized via First Aid, or until death.

## State Summary

+----------------------------+
| Combatant                  |
+----------------------------+
| name: string (not blank)   |
| dexterity: int > 0         |
| totalHitPoints: int > 0    |
| currentHitPoints: int >= 0 |
| hasReadiedFirearm: bool    |
| hasMajorWound: bool        |
+----------------------------+

+----------------------------+
| Encounter                  |
+----------------------------+
| combatants: Set<Combatant> |
| currentlyActing: Combatant |
+----------------------------+
