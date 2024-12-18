import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { ProductType } from './Types';

interface CartState {
  cart: ProductType[];
}

interface CartAction {
  type: 'ADD_TO_CART' | 'REMOVE_FROM_CART' | 'INCREASE_QUANTITY' | 'DECREASE_QUANTITY' | 'RESET_CART';
  payload: ProductType | number;
}

const initialState: CartState = {
  cart: [],
};

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

const cartReducer = (state: CartState, action: CartAction): CartState => {

    const existingProduct = state.cart.find((item) => item.id === (action.payload as ProductType).id);

  switch (action.type) {
    case 'ADD_TO_CART':
      
      if (existingProduct) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === (action.payload as ProductType).id ? { ...item, qty: item.qty + 1 } : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...(action.payload as ProductType), qty: 1 }],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
        ),
      };
    case 'DECREASE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
        ).filter((item) => item.qty > 0),
      };
    case 'RESET_CART':
        return {
            ...state,
            cart: [],
        };
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);