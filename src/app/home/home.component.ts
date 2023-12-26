import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  count = 0;

  countUp = () => this.count++;

  countDown = () => {
    if (this.count === 0) return;
    this.count--;
  }

  reset = () => this.count = 0;
}
