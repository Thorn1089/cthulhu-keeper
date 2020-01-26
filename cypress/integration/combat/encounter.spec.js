/// <reference types="Cypress" />

describe('Combat encounter management', () => {
    it('Allows a Keeper to create an encounter with some combatants', () => {
        cy.visit('/encounter');

        cy.get('button:contains("New Encounter")').as('newEncounter');

        cy.get('@newEncounter').click();

        cy.get('form').within(() => {
            cy.get('button:contains("Add Combatant")').as('add')

            cy.get('@add').click();
            cy.get('fieldset:eq(0)').within(() => {
                cy.get('label:contains("Name")').next('input').type('William Harvey');
                cy.get('label:contains("DEX")').next('input').type('50');
            });

            cy.get('@add').click();
            cy.get('fieldset:eq(1)').within(() => {
                cy.get('label:contains("Name")').next('input').type('Irene Power');
                cy.get('label:contains("DEX")').next('input').type('75');
            });
        });

        cy.contains('Start Encounter').click();

        cy.get('form').should('not.exist');
        cy.get('@newEncounter').should('not.exist');

        cy.get('h2:contains("Combatants")').parents('section').as('combatantList');

        cy.get('@combatantList').within(() => {
            cy.contains('William Harvey');
            cy.contains('Irene Power');
        });
    });
});