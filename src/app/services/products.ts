import { httpResource } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class Products {
  products = httpResource<Product[]>(() => '/data/products.json');
}
