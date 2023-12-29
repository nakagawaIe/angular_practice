import { Component, Input } from '@angular/core';
import { IProduct } from '../types/product';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.scss',
})
export class ProductListItemComponent {
  @Input() item!: IProduct;
}
