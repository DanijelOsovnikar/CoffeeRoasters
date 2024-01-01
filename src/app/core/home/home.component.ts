import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tabletImage: boolean = false;
  mobileImage: boolean = false;

  constructor(private router: Router) {}
  ngOnInit(): void {
    if (this.router.url == '/home') {
      window.scrollTo(0, 0);
    }
  }
}
