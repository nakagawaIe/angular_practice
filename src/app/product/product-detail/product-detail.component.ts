import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../types/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  providers: [ProductService],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  private productService = inject(ProductService);
  route: ActivatedRoute = inject(ActivatedRoute);
  id = -1;
  item: IProduct | undefined;
  status: 'loading' | 'fetched' = 'loading';

  constructor() {
    this.id = Number(this.route.snapshot.params['id']);
    if (this.id <= 0) {
      this.status = 'fetched';
      return;
    }
    this.productService.fetchProduct(this.id).subscribe(data => {
      this.item = data;
      this.status = 'fetched';
    });
  }
}
