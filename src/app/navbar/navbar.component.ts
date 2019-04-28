import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PATH_HOME, PATH_BLUETOOTH } from '../app.routes.constantes';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleReturn() {
    this.router.navigate([PATH_HOME]);
  }

  isHomePage() {
    return this.router.url === `/${PATH_HOME}` ? false : true;
  }
}
