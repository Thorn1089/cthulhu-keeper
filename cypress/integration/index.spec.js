describe('Sanity test', () => {
    it('Loads the main page', () => {
        cy.visit('/');
        cy.contains('Hello, World!');
    });
});