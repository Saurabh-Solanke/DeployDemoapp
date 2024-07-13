import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartState } from '../../store/reducers/cart.reducer';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts$: Observable<Product[]>;

  constructor(private store: Store<{ cart: CartState }>) {
    this.cartProducts$ = store.pipe(select('cart', 'products'));
  }

  ngOnInit(): void {
  }

  getTotalPrice(products: Product[]): number {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
  }
}
