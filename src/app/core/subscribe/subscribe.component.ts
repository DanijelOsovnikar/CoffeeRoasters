import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss'],
})
export class SubscribeComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  toggleFunc(event: any) {
    console.log(event);
    event.target.classList.toggle('active');

    let panel = event.srcElement.nextElementSibling;

    if (panel.style.display === 'flex') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'flex';
    }
  }
}
