import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {

  @Input() rating: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter();
  starWidth: number;

  constructor() {
    this.starWidth = 30;
  }

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(` The rating is ${this.rating}`);
  }

}
