import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss'],
})
export class SubscribeComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    if (this.router.url == '/subscribe') {
      window.scrollTo(0, 0);
    }
  }

  toggleFunc(event: any) {
    console.log(event);
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
}
