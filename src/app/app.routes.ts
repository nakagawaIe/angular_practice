import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ForecastComponent } from './forecast/forecast.component';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'My Angular App',
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
];
