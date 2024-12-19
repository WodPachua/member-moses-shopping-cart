describe('Products Catalogue browsing', () => {
    beforeEach(() => {
      cy.visit('/browse');
    });
  
    it('should search for products', () => {
      cy.contains('Products');
      cy.get('input').type('growth');
        cy.contains('Psalms Book for Growth');
        cy.get('img').should('be.visible');
    });
  
    it('should add product(s) to cart', () => {
    cy.get('.tabler-icon-basket').first().click();
      cy.get('.MuiSnackbar-root').should('contain', 'Item Added to the Cart!!!');
      cy.get('.MuiBadge-badge').should('be.visible').and('contain', '1');

    cy.get('.tabler-icon-basket').first().click();
        cy.get('.MuiSnackbar-root').should('contain', 'Item Added to the Cart!!!');
        cy.get('.MuiBadge-badge').should('be.visible').and('contain', '2');
    });

  });