import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { IProduct } from '../types/product';

interface IState {
  products: IProduct[];
  isShowForm: boolean;
}

@Injectable()
export class ProductStore extends ComponentStore<IState> {
  constructor() {
    super({
      products: [],
      isShowForm: false,
    });
  }

  readonly products$: Observable<IProduct[]> = this.select(({ products }) => products);
  readonly isShowForm$: Observable<boolean> = this.select(({ isShowForm }) => isShowForm);

  readonly toggleShowForm = this.updater(
    (state): IState => ({ ...state, isShowForm: !state.isShowForm }),
  );

  readonly firstLoad = this.updater(
    (state, products: IProduct[]): IState => ({ ...state, products }),
  );
  readonly load = this.updater(
    (state, products: IProduct[]): IState => ({
      ...state,
      products: [...state.products, ...products],
    }),
  );
}
