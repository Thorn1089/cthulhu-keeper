describe('The top-level app shell', () => {
    it('Loads the main page', () => {
        cy.visit('/');
        cy.contains('Encounter');
    });
});