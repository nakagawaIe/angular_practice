import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../services/product.service';
import { ProductStore } from './store/product.store';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [ProductService, ProductStore],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  private productService = inject(ProductService);
  private productStore = inject(ProductStore);

  readonly products$ = this.productStore.products$;

  constructor() {
    this.productService.fetchProducts().subscribe(this.productStore.firstLoad);
  }
}
