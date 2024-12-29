import React from 'react';
import { mount } from 'cypress/react18';
import ProductDetail from '../../src/Components/ProductView/ProductDetail';
import ProductsData from '../../src/api/ProductsData';
import { CartProvider } from '../../src/Components/CartContext';

describe('ProductDetail Component', () => {
  it('should render ProductDetail with product info', () => {
    const product = ProductsData[0];
    mount(
      <CartProvider>
        <ProductDetail product={product} />
      </CartProvider>
    );

    cy.contains(product.title);
    cy.contains(product.description);
    cy.contains(`$${product.price}`);
  });

  it('should add product to cart', () => {
    const product = ProductsData[0];
    mount(
      <CartProvider>
        <ProductDetail product={product} />
      </CartProvider>
    );

    cy.contains('Add to Cart').click();
    cy.get('.MuiSnackbar-root').should('contain', 'Item Added to the Cart!!!');
  });
});