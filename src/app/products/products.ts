import { Component, inject } from '@angular/core';
import { Products as ProductsService } from '../services/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  productsService = inject(ProductsService);
}
