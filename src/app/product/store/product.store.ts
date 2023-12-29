import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { IProduct } from '../types/product';

interface IState {
  products: IProduct[];
}

@Injectable()
export class ProductStore extends ComponentStore<IState> {
  constructor() {
    super({
      products: [],
    });
  }

  readonly products$: Observable<IProduct[]> = this.select(({ products }) => products);

  readonly firstLoad = this.updater((_, products: IProduct[]): IState => ({ products }));
  readonly load = this.updater(
    (state, products: IProduct[]): IState => ({ products: [...state.products, ...products] }),
  );
}
