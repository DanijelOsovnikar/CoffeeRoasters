import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss'],
})
export class SubscribeComponent implements OnInit {
  beverage = new FormControl();
  coffeeType = new FormControl();
  howMuchCoffee = new FormControl();
  grind = new FormControl();
  delivery = new FormControl();

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.router.url == '/subscribe') {
      window.scrollTo(0, 0);
    }
  }

  toggleFunc(event: any) {
    event.target.classList.toggle('active');

    let panel = event.srcElement.nextElementSibling;

    if (panel.style.display === 'flex') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'flex';
    }

    if (panel.style.maxHeight) {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  }
  onClick() {
    console.log(this.beverage.value);
  }

  onChangeActive(event: any) {
    console.log(event);
  }
}
