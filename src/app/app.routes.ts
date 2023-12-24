import { Routes } from '@angular/router';
import { ForecastComponent } from './forecast/forecast.component';

export const routes: Routes = [
  {
    path: '',
    component: ForecastComponent,
    title: '洗車予報',
  },
];
