import { afterNextRender, Component, input, signal } from '@angular/core';
import { Product } from '../../interfaces';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
  imports: [],
  standalone: true,
})
export class ProductsList {
  products = input.required<Product[]>();
  loading = signal(true);

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
    this.loading.set(false);
  }

  addToCart(product: Product) {
    alert(`Product added to cart: ${product.name}`);
  }
}
