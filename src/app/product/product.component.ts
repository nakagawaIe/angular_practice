import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { ProductStore } from './store/product.store';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ProductListItemComponent],
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
