enum Characteristic {
    Strength = "STR",
    Dexterity = "DEX",
    Intelligence = "INT",
    Constitution = "CON",
    Appearance = "APP",
    Power = "POW",
    Size = "SIZ",
    Education = "EDU",
    Sanity = "SAN"
}

type CharacteristicValue = number;

interface Character {
    name: string;
    notes: string;
    characteristics: {
        [Characteristic.Strength]: CharacteristicValue;
        [Characteristic.Dexterity]: CharacteristicValue;
        [Characteristic.Intelligence]: CharacteristicValue;
        [Characteristic.Constitution]: CharacteristicValue;
        [Characteristic.Appearance]: CharacteristicValue;
        [Characteristic.Power]: CharacteristicValue;
        [Characteristic.Size]: CharacteristicValue;
        [Characteristic.Education]: CharacteristicValue;
        [Characteristic.Sanity]: CharacteristicValue;
    }
}

export default Character;
export { Characteristic };
export { CharacteristicValue };