import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  providers: [ProductService],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent {
  private productService = inject(ProductService);

  productForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
  });

  status: null | 'submit' | 'done' = null;

  post() {
    const { value, valid } = this.productForm;
    if (!valid) return;
    this.status = 'submit';
    this.productService
      .postProduct({
        title: value.title ?? '',
        description: value.description ?? '',
        image: value.image ?? '',
        category: value.category ?? '',
        price: value.price ?? '',
      })
      .subscribe(d => {
        console.log(d);
        this.productForm.reset();
        this.status = 'done';
        setTimeout(() => (this.status = null), 3000);
      });
  }
}
