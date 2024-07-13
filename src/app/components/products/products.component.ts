import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { addProduct } from '../../store/actions/cart.actions';
import { CartState } from '../../store/reducers/cart.reducer';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  cartCounts: { [key: number]: number } = {};

  constructor(private store: Store<{ cart: CartState }>) {
    this.store
      .pipe(select((state) => state.cart.products))
      .subscribe((products) => {
        this.cartCounts = products.reduce((counts, product) => {
        
          return counts;
        }, {});
      });
  }

  ngOnInit(): void {
    // Generate product data with image URLs from 1 to 196
    for (let i = 1; i <= 196  ; i++) {
      this.products.push({
        id: i,
        name: `Pokémon Card ${i}`,
        category: 'Various',
        price: Math.floor(Math.random() * 20) + 5, // Random price between 5 and 24
        quantity: 1,
        imageUrl: `https://assets.pokemon.com/assets/cms2/img/cards/web/SM9/SM9_EN_${i}.png`,
      });
    }
  }

  addToCart(product: Product): void {
    console.log('Dispatching addProduct action for:', product);
    this.store.dispatch(addProduct({ product }));
  }
}
