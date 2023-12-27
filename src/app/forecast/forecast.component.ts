import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { ForecastService } from '../services/forecast.service';
import { IForecastItem } from '../types/forecast';
import { ForecastItemComponent } from './forecast-item/forecast-item.component';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [CommonModule, ForecastItemComponent],
  providers: [DatePipe],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.scss',
})
export class ForecastComponent {
  forecastMap: Map<string, IForecastItem[]> = new Map();
  forecastService: ForecastService = inject(ForecastService);

  constructor(private datePipe: DatePipe) {
    this.forecastService
      .fetchForecast({
        appid: '4b56733000a1240e7c36803c5922770c',
        units: 'metric',
        id: 6940394,
      })
      .subscribe(data => {
        this.forecastMap = this.groupByDate(data.list);
      });
  }

  private groupByDate = (forecast: IForecastItem[]) =>
    forecast.reduce(
      (result, current) => {
        const { dt } = current;
        const dateText = this.datePipe.transform(new Date(dt * 1000), 'yyyy年MM月dd日') ?? '';
        const forecastsForTheDay = result.get(dateText);
        if (forecastsForTheDay) {
          forecastsForTheDay.push(current);
        } else {
          result.set(dateText, [current]);
        }
        return result;
      },
      new Map() as Map<string, IForecastItem[]>,
    );
}
