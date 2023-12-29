import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../services/product.service';
import { IProduct } from './types/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [ProductService],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  private productService = inject(ProductService);
  products: IProduct[] = [];

  constructor() {
    this.productService.fetchProducts().subscribe(data => {
      this.products = data;
    });
  }
}
