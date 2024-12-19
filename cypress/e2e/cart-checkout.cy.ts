describe('Checkout Page', () => {
  
    it('should be empty initially', () => {
    cy.visit('/checkout');
      cy.contains('Cart is Empty');
    });
  
    it('should complete the checkout process', () => {
    cy.visit('/browse');
    cy.get('.tabler-icon-basket').first().click();
    cy.get('.MuiBadge-badge').click();
    cy.contains('How Innovation Works');
    cy.contains('Order Summary');
    cy.get('button').contains('Checkout').click();
    cy.get('button').contains('Deliver To this address').first().click();
    cy.get('button').contains('Complete Order').click();
    cy.contains('Thank you for your purchase!');
    cy.get('.MuiBadge-badge').should('not.be.visible');
    });

    it('should increase, decrease quantity of item in cart, remove item in cart', () => {
        cy.visit('/browse');
        cy.get('.tabler-icon-basket').first().click();
        cy.get('.MuiBadge-badge').should('be.visible').and('contain', '1');
        cy.get('.tabler-icon-basket').first().click();
        cy.get('.MuiBadge-badge').should('be.visible').and('contain', '2');
        cy.get('.tabler-icon-basket').first().click();
        cy.get('.MuiBadge-badge').should('be.visible').and('contain', '3');
        cy.get('.MuiBadge-badge').click();
        cy.get('button').contains('3');
        cy.get('.tabler-icon-plus').click();
        cy.get('.tabler-icon-plus').click();
        cy.get('.MuiBadge-badge').should('be.visible').and('contain', '5');
        cy.get('.tabler-icon-minus').click();
        cy.get('.MuiBadge-badge').should('be.visible').and('contain', '4');
        cy.get('.MuiBadge-badge').click();
        cy.get('.tabler-icon-trash').click();
        cy.get('.MuiBadge-badge').should('not.be.visible');
        cy.contains('Cart is Empty');
    });
  });