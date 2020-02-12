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

            cy.get('legend:contains("Skills")').parents('fieldset').within(() => {
                cy.get('button:contains("Add Skill")').as('newSkill');

                cy.get('@newSkill').click();

                cy.get('label:contains("Skill"):last()').next('input').type('Fighting (Brawl)');
                cy.get('label:contains("Rating"):last()').next('input').type('50');

                cy.get('@newSkill').click();

                cy.get('label:contains("Skill"):last()').next('input').type('Spot Hidden');
                cy.get('label:contains("Rating"):last()').next('input').type('75');
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