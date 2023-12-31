import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    this.hamburgerFunc();
    this.hamburgerRemove();
  }

  hamburgerFunc() {
    let hamb = document.getElementById('hamburger') as HTMLElement;
    let navMenu = document.getElementById('nav') as HTMLElement;
    let container = document.getElementById('container') as HTMLElement;

    hamb.addEventListener('click', () => {
      hamb.classList.toggle('active');
      container.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }

  hamburgerRemove() {
    let hamb = document.getElementById('hamburger') as HTMLElement;
    let navMenu = document.getElementById('nav') as HTMLElement;
    let container = document.getElementById('container') as HTMLElement;

    document.querySelectorAll('#nav-link').forEach((n) =>
      n.addEventListener('click', () => {
        hamb.classList.remove('active');
        container.classList.remove('active');
        navMenu.classList.remove('active');
      })
    );
  }
}
