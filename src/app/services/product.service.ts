import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../product/types/product';

@Injectable()
export class ProductService {
  private url = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  fetchProducts() {
    return this.http.get<IProduct[]>(`${this.url}`);
  }
}
