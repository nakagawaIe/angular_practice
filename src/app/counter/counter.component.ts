import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  count = 0;

  countUp = () => this.count++;

  countDown = () => {
    if (this.count === 0) return;
    this.count--;
  }

  reset = () => this.count = 0;
}
