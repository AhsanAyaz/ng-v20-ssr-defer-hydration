import { httpResource } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class Products {
  products = httpResource<Product[]>(() => '/data/products.json');
}
