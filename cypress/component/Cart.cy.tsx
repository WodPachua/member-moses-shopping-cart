import React from 'react';
import { mount } from 'cypress/react18';
import Cart from '../../src/Components/CartCheckout/Cart';
import ProductsData from '../../src/api/ProductsData';
import { CartProvider } from '../../src/Components/CartContext';

describe('Cart Component', () => {
  it('should render Cart with products', () => {
    const cart = [ProductsData[0]];
    mount(
      <CartProvider>
        <Cart cart={cart} />
      </CartProvider>
    );

    cy.contains(cart[0].title);
    cy.contains(`$${cart[0].price}`);
  });

  it('should show empty cart message', () => {
    mount(
      <CartProvider>
        <Cart cart={[]} />
      </CartProvider>
    );

    cy.contains('Cart is Empty');
  });
});