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
      this.heavyComputation();
    });
  }

  private heavyComputation() {
    console.log('Starting heavy computation...');
    const startTime = performance.now();
    let result = 0;
    for (let i = 0; i < 2000000000; i++) {
      result += Math.sqrt(i);
    }
    const endTime = performance.now();
    console.log(`Heavy computation finished in ${endTime - startTime} ms`);
  }

  addToCart(product: Product) {
    alert(`Product added to cart: ${product.name}`);
  }
}
