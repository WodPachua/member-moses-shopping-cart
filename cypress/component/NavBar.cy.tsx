import React from 'react';
import { mount } from 'cypress/react18';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../../src/Components/NavBar';
import { CartProvider } from '../../src/Components/CartContext';

describe('NavBar Component', () => {
  it('should render NavBar with correct links', () => {
    mount(
      <MemoryRouter>
        <CartProvider>
          <NavBar toggleCart={() => {}} />
        </CartProvider>
      </MemoryRouter>
    );

    cy.contains('GoodNewsShop');
    cy.contains('Home');
    cy.contains('Catalogue');
    cy.contains('Check-Out');
  });

});