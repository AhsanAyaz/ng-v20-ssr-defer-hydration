import { afterNextRender, Component, input } from '@angular/core';
import { Product } from '../../interfaces';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList {
  products = input.required<Product[]>();

  constructor() {
    afterNextRender(() => {
      console.log(
        'ProductsList component initialized with products:',
        this.products()
      );
    });
  }

  addToCart(product: Product) {
    alert(`Product added to cart: ${product.name}`);
  }
}
