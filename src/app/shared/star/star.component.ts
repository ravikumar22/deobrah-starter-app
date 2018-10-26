import { Component } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent {
  rating: number;
  starWidth: number;

  constructor() {
    this.rating = 4;
    this.starWidth = 30;
  }

}
