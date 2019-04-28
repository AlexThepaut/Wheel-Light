import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wheel-speed',
  templateUrl: './wheel-speed.component.html',
  styleUrls: ['./wheel-speed.component.css']
})
export class WheelSpeedComponent implements OnInit {

  wheelSpeed: number;

  constructor() { }

  ngOnInit() {
    const speedMock = setInterval(() => {
      this.wheelSpeed = Math.floor((Math.random()*(30-15+1)+15) * 100) / 100;
  }, 200);
  }

}
