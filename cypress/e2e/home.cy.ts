describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load the home page headings', () => {
    cy.contains('GoodNewsShop');
    cy.contains('Trending Products');
  });

  it('should navigate to the product page when a preview product is clicked', () => {
    cy.get('.home .preview a').first().click();
    cy.url().should('include', '/product/');
  });

  it('should have a button "Browse Products", which clicking navigates to the products page', () => {
    cy.contains('Browse Products').click();
    cy.url().should('include', '/browse');
  });

  it('should have nav anchor items "Home", "Catalogue", and "Check-Out" which should navigate to correct pages on click', () => {
    cy.get('nav a').contains('Home').click();
    cy.url().should('include', '/');
    cy.get('nav a').contains('Catalogue').click();
    cy.url().should('include', '/browse');
    cy.get('nav a').contains('Check-Out').click();
    cy.url().should('include', '/checkout');
  });
  
});