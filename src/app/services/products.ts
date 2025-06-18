import { inject, Injectable, resource } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Product } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class Products {
  http = inject(HttpClient);
  products = resource<Product[], string>({
    loader: () => this.getProducts(),
  });
  getProducts() {
    return firstValueFrom(this.http.get<Product[]>('/data/products.json'));
  }
}
