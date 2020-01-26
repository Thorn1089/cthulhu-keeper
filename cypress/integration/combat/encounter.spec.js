/// <reference types="Cypress" />

describe('Combat encounter management', () => {
    it('Allows a Keeper to start an encounter with some combatants and then end it', () => {
        startEncounterWith([
            { name: 'William Harvey', dexterity: 50 },
            { name: 'Irene Power', dexterity: 75 }
        ]);

        cy.get('form').should('not.exist');
        cy.get('@newEncounter').should('not.exist');

        cy.get('h2:contains("Combatants")').parents('section').as('combatantList');
        cy.get('@combatantList').within(() => {
            cy.contains('William Harvey');
            cy.contains('Irene Power');
        });

        endEncounter();

        cy.get('h2:contains("Combatants")').should('not.exist');
        cy.get('@newEncounter').should('exist');
    });

    it('Handles turn order based on dexterity score', () => {
        startEncounterWith([
            { name: 'William Harvey', dexterity: 50 },
            { name: 'Irene Power', dexterity: 75 }
        ]);

        cy.get('h2:contains("Active Combatant")').parents('section').as('activeCombatant');
        cy.contains('Next Combatant').as('next');

        cy.get('@next').click();
        cy.get('@activeCombatant').within(() => {
            cy.contains('Irene Power');
        });

        cy.get('@next').click();
        cy.get('@activeCombatant').within(() => {
            cy.contains('William Harvey');
        });

        cy.get('@next').click();
        cy.get('@activeCombatant').within(() => {
            cy.contains('Irene Power');
        });

        cy.get('@next').click();
        cy.get('@activeCombatant').within(() => {
            cy.contains('William Harvey');
        });
    });

    const addCombatant = (name, dexterity) => {
        cy.get('@add').click();
        cy.get('fieldset:last()').within(() => {
            cy.get('label:contains("Name")').next('input').type(name);
            cy.get('label:contains("DEX")').next('input').type(dexterity);
        });
    };

    const startEncounterWith = (combatants) => {
        cy.visit('/encounter');

        cy.get('button:contains("New Encounter")').as('newEncounter');

        cy.get('@newEncounter').click();

        cy.get('form').within(() => {
            cy.get('button:contains("Add Combatant")').as('add')

            combatants.forEach(combatant => {
                addCombatant(combatant.name, combatant.dexterity);
            });
        });

        cy.contains('Start Encounter').click();
    };

    const endEncounter = () => {
        cy.contains('End Encounter').click();
    };
});