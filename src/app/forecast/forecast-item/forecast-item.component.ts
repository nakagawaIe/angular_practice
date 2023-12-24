import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IForecastItem } from '../../types/forecast';

@Component({
  selector: 'app-forecast-item',
  standalone: true,
  imports: [],
  providers: [DatePipe],
  templateUrl: './forecast-item.component.html',
  styleUrl: './forecast-item.component.scss'
})
export class ForecastItemComponent {
  @Input() item!: IForecastItem;

  constructor(private datePipe: DatePipe) { }

  dateTimeText = () => this.datePipe.transform(new Date(this.item.dt * 1000), 'yyyy年MM月dd日HH時mm分');
}
