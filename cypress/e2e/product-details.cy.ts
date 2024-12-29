describe('Products Details Page', () => {
    it('should show right product details/info', () => {
      cy.visit('/product/1');
      cy.contains('How Innovation Works');
      cy.contains('$275');
      cy.contains('Description');
      cy.contains('In Stock');
      cy.get('img').should('be.visible');
    });
  });