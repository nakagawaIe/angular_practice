import { Component, OnInit } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }
}
