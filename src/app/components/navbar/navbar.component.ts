import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartState } from '../../store/reducers/cart.reducer';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  cartCount$: Observable<number>;

  constructor(private store: Store<{ cart: CartState }>) {
    this.cartCount$ = this.store.pipe(
      select((state) => {
        const count = state.cart.products.reduce(
          (total, product) => total + product.quantity,
          0
        );
        console.log('Current cart count:', count); // Logs the current cart count
        return count;
      })
    );
  }

  ngOnInit(): void {}
}
