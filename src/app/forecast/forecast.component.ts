import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastService } from '../services/forecast.service';
import { IForecastItem } from '../types/forecast';
import { ForecastItemComponent } from './forecast-item/forecast-item.component';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [CommonModule, ForecastItemComponent],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.scss'
})
export class ForecastComponent {
  forecast: IForecastItem[] = [];
  forecastService: ForecastService = inject(ForecastService);

  constructor() {
    this.forecastService.fetchForecast({
      appid: '4b56733000a1240e7c36803c5922770c',
      units: 'metric',
      id: 6940394,
    }).then(data => {
      console.log(data);
      this.forecast = data
    });
  }
}
