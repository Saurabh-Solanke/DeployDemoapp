import { createAction, props } from '@ngrx/store';
import { Product } from '../../models/product.model';

export const addProduct = createAction(
  '[Product Page] Add Product',
  props<{ product: Product }>()
);

export const removeProduct = createAction(
  '[Cart Page] Remove Product',
  props<{ productId: number }>()
);
