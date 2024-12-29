import React from 'react';
import { mount } from 'cypress/react18';
import { MemoryRouter } from 'react-router-dom';
import Home from '../../src/Components/Home';
import ProductsData from '../../src/api/ProductsData';

describe('Home Component', () => {
  it('should render Home with trending products', () => {
    mount(
      <MemoryRouter>
        <Home productsData={ProductsData} />
      </MemoryRouter>
    );

    cy.contains('Amazing and Life-Transforming literature the World needs.');
    cy.contains('Trending Products');
    cy.get('.hoverCard').should('have.length.greaterThan', 0);
  });
});