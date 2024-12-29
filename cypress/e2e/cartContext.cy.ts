import { cartReducer, CartState, CartAction } from '../../src/Components/CartContext';
import { ProductType } from '../../src/Components/Types';

describe('cartReducer', () => {
  const initialState: CartState = { cart: [] };

  const product: ProductType = {
      id: 1, 
      title: 'Test Product', 
      price: 100, 
      qty: 1, 
      description: '', 
      photo: '',
      discount: 0,
      related: false,
      salesPrice: 0,
      category: [],
      gender: '',
      rating: 0,
      stock: false,
      colors: [],
      created: new Date(),
      images: []
  };

  it('should add product to the cart', () => {
    const action: CartAction = { type: 'ADD_TO_CART', payload: product };
    const newState = cartReducer(initialState, action);
    expect(newState.cart.length).to.equal(1);
    expect(newState.cart[0]).to.deep.equal(product);
  });

  it('should remove the added product', () => {
    const state: CartState = { cart: [product] };
    const action: CartAction = { type: 'REMOVE_FROM_CART', payload: product.id as number };
    const newState = cartReducer(state, action);
    expect(newState.cart.length).to.equal(0);
  });

  it('should increase the cart product quantity', () => {
    const state: CartState = { cart: [product] };
    const action: CartAction = { type: 'INCREASE_QUANTITY', payload: product.id as number };
    const newState = cartReducer(state, action);
    expect(newState.cart[0].qty).to.equal(2);
  });

  it('should decrease the cart product quantity', () => {
    const state: CartState = { cart: [{ ...product, qty: 2 }] };
    const action: CartAction = { type: 'DECREASE_QUANTITY', payload: product.id as number };
    const newState = cartReducer(state, action);
    expect(newState.cart[0].qty).to.equal(1);
  });

  it('should remove the product when quantity reduces to less than 1', () => {
    const state: CartState = { cart: [product] };
    const action: CartAction = { type: 'DECREASE_QUANTITY', payload: product.id as number };
    const newState = cartReducer(state, action);
    expect(newState.cart.length).to.equal(0);
  });

  it('should reset the cart', () => {
    const state: CartState = { cart: [product] };
    const action: CartAction = { type: 'RESET_CART', payload: 0 };
    const newState = cartReducer(state, action);
    expect(newState.cart.length).to.equal(0);
  });
});