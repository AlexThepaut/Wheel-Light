import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PATH_BLUETOOTH, PATH_SENDTEXT, PATH_SPEED } from '../app.routes.constantes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToBluetooth() {
    this.router.navigate([PATH_BLUETOOTH]);
  }

  goToSend() {
    this.router.navigate([PATH_SENDTEXT]);
  }

  goToSpeed() {
    this.router.navigate([PATH_SPEED]);
  }
}
