import { createReducer, on, Action } from '@ngrx/store';
import { addProduct, removeProduct } from '../actions/cart.actions';
import { Product } from '../../models/product.model';

export interface CartState {
  products: Product[];
}

export const initialState: CartState = {
  products: [],
};

const _cartReducer = createReducer(
  initialState,
  on(addProduct, (state, { product }) => {
    console.log('addProduct action dispatched:', product);
    const productExists = state.products.find((p) => p.id === product.id);
    if (productExists) {
      const updatedState = {
        ...state,
        products: state.products.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        ),
      };
      console.log('State after adding existing product:', updatedState);
      return updatedState;
    } else {
      const updatedState = {
        ...state,
        products: [...state.products, { ...product, quantity: 1 }],
      };
      console.log('State after adding new product:', updatedState);
      return updatedState;
    }
  }),
  on(removeProduct, (state, { productId }) => {
    const updatedState = {
      ...state,
      products: state.products.filter((p) => p.id !== productId),
    };
    console.log('State after removing product:', updatedState);
    return updatedState;
  })
);

export function cartReducer(state: CartState | undefined, action: Action) {
  return _cartReducer(state, action);
}
