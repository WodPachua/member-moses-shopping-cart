describe('Error Page Loading', () => {
    it('should show error page when loading an unknown/wrong route', () => {
        cy.visit('/offRoad');
        cy.get('h4').should('contain.text', '404: Not Found');
        cy.contains('We’re not quite sure what went wrong. You can go try again, or return to Home.');
    });
});
