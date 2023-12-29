import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  id = -1;
  constructor() {
    this.id = Number(this.route.snapshot.params['id']);
  }
}
