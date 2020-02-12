/// <reference types="Cypress" />

describe('Character roster management', () => {
    it('Allows a Keeper to create and review character\'s vital stats', () => {
        cy.visit('/roster');

        cy.get('button:contains("New Character")').as('newCharacter');

        cy.get('@newCharacter').click();

        cy.get('form').within(() => {
            cy.get('legend:contains("Info")').parents('fieldset').within(() => {
                cy.get('label:contains("Name")').next('input').type('Jane Doe');
                cy.get('label:contains("Notes")').next('textarea').type('Some notes about this character');
            });

            cy.get('legend:contains("Characteristics")').parents('fieldset').within(() => {
                cy.get('label:contains("STR")').next('input').type('{selectall}50');
                cy.get('label:contains("DEX")').next('input').type('{selectall}50');
                cy.get('label:contains("INT")').next('input').type('{selectall}50');
                cy.get('label:contains("CON")').next('input').type('{selectall}50');
                cy.get('label:contains("APP")').next('input').type('{selectall}50');
                cy.get('label:contains("POW")').next('input').type('{selectall}50');
                cy.get('label:contains("SIZ")').next('input').type('{selectall}50');
                cy.get('label:contains("EDU")').next('input').type('{selectall}50');
                cy.get('label:contains("SAN")').next('input').type('{selectall}50');
            });

            cy.get('button:contains("Create Character")').click();
        });

        cy.get('h2:contains("Characters")').parents('section').as('characterList');

        cy.get('@characterList').within(() => {
            cy.contains('Jane Doe');
            //TODO click and verify details were added
        });
    });
});