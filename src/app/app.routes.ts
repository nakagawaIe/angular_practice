import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ForecastComponent } from './forecast/forecast.component';
import { TodoComponent } from './todo/todo.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'forecast',
    component: ForecastComponent,
    title: '天気予報',
  },
  {
    path: 'todo',
    component: TodoComponent,
    title: 'Todoリスト',
  },
  {
    path: 'products',
    component: ProductComponent,
    title: '商品一覧',
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
    title: '商品詳細',
  },
];
