import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  trackTouchBeverage(event: any) {
    let capsule = document.querySelector('#capsule') as HTMLDivElement;
    let filter = document.querySelector('#filter') as HTMLDivElement;
    let espresso = document.querySelector('#espresso') as HTMLDivElement;
    let result = '';

    if (event.target.id == 'capsule' && capsule.classList.contains('panel')) {
      capsule.classList.replace('panel', 'panelActive');
      result = 'CAPSULE';
    } else if (
      event.target.id == 'capsule' &&
      capsule.classList.contains('panelActive')
    ) {
      capsule.classList.replace('panelActive', 'panel');
      result = '';
    }

    if (event.target.id == 'filter' && filter.classList.contains('panel')) {
      filter.classList.replace('panel', 'panelActive');
      result = 'FILTER';
    } else if (
      event.target.id == 'filter' &&
      filter.classList.contains('panelActive')
    ) {
      filter.classList.replace('panelActive', 'panel');
      result = '';
    }

    if (event.target.id == 'espresso' && espresso.classList.contains('panel')) {
      espresso.classList.replace('panel', 'panelActive');
      result = 'ESPRESSO';
    } else if (
      event.target.id == 'espresso' &&
      espresso.classList.contains('panelActive')
    ) {
      espresso.classList.replace('panelActive', 'panel');
      result = '';
    }
    return result;
  }
  trackTouchCoffeeType(event: any) {
    let singleOrigin = document.querySelector(
      '#singleOrigin'
    ) as HTMLDivElement;
    let decaf = document.querySelector('#decaf') as HTMLDivElement;
    let blended = document.querySelector('#blended') as HTMLDivElement;

    if (
      event.target.id == 'singleOrigin' &&
      singleOrigin.classList.contains('panel')
    ) {
      singleOrigin.classList.replace('panel', 'panelActive');
    } else if (
      event.target.id == 'singleOrigin' &&
      singleOrigin.classList.contains('panelActive')
    ) {
      singleOrigin.classList.replace('panelActive', 'panel');
    }
    if (event.target.id == 'decaf' && decaf.classList.contains('panel')) {
      decaf.classList.replace('panel', 'panelActive');
    } else if (
      event.target.id == 'decaf' &&
      decaf.classList.contains('panelActive')
    ) {
      decaf.classList.replace('panelActive', 'panel');
    }
    if (event.target.id == 'blended' && blended.classList.contains('panel')) {
      blended.classList.replace('panel', 'panelActive');
    } else if (
      event.target.id == 'blended' &&
      blended.classList.contains('panelActive')
    ) {
      blended.classList.replace('panelActive', 'panel');
    }
  }
  trackHowMuchCoffee(event: any) {
    let twoFiftyGr = document.querySelector('#twoFiftyGr') as HTMLDivElement;
    let fiveHundredGr = document.querySelector(
      '#fiveHundredGr'
    ) as HTMLDivElement;
    let oneKg = document.querySelector('#oneKg') as HTMLDivElement;

    if (
      event.target.id == 'twoFiftyGr' &&
      twoFiftyGr.classList.contains('panel')
    ) {
      twoFiftyGr.classList.replace('panel', 'panelActive');
    } else if (
      event.target.id == 'twoFiftyGr' &&
      twoFiftyGr.classList.contains('panelActive')
    ) {
      twoFiftyGr.classList.replace('panelActive', 'panel');
    }

    if (
      event.target.id == 'fiveHundredGr' &&
      fiveHundredGr.classList.contains('panel')
    ) {
      fiveHundredGr.classList.replace('panel', 'panelActive');
    } else if (
      event.target.id == 'fiveHundredGr' &&
      fiveHundredGr.classList.contains('panelActive')
    ) {
      fiveHundredGr.classList.replace('panelActive', 'panel');
    }

    if (event.target.id == 'oneKg' && oneKg.classList.contains('panel')) {
      oneKg.classList.replace('panel', 'panelActive');
    } else if (
      event.target.id == 'oneKg' &&
      oneKg.classList.contains('panelActive')
    ) {
      oneKg.classList.replace('panelActive', 'panel');
    }
  }
  trackGrind(event: any) {
    let wholeBean = document.querySelector('#wholeBean') as HTMLDivElement;
    let filterGrind = document.querySelector('#filterGrind') as HTMLDivElement;
    let cafetiere = document.querySelector('#cafetiere') as HTMLDivElement;

    if (
      event.target.id == 'wholeBean' &&
      wholeBean.classList.contains('panel')
    ) {
      wholeBean.classList.replace('panel', 'panelActive');
    } else if (
      event.target.id == 'wholeBean' &&
      wholeBean.classList.contains('panelActive')
    ) {
      wholeBean.classList.replace('panelActive', 'panel');
    }

    if (
      event.target.id == 'filterGrind' &&
      filterGrind.classList.contains('panel')
    ) {
      filterGrind.classList.replace('panel', 'panelActive');
    } else if (
      event.target.id == 'filterGrind' &&
      filterGrind.classList.contains('panelActive')
    ) {
      filterGrind.classList.replace('panelActive', 'panel');
    }

    if (
      event.target.id == 'cafetiere' &&
      cafetiere.classList.contains('panel')
    ) {
      cafetiere.classList.replace('panel', 'panelActive');
    } else if (
      event.target.id == 'cafetiere' &&
      cafetiere.classList.contains('panelActive')
    ) {
      cafetiere.classList.replace('panelActive', 'panel');
    }
  }
  trackDelivery(event: any) {
    let oneWeek = document.querySelector('#oneWeek') as HTMLDivElement;
    let twoWeeks = document.querySelector('#twoWeeks') as HTMLDivElement;
    let month = document.querySelector('#month') as HTMLDivElement;

    if (event.target.id == 'oneWeek' && oneWeek.classList.contains('panel')) {
      oneWeek.classList.replace('panel', 'panelActive');
    } else if (
      event.target.id == 'oneWeek' &&
      oneWeek.classList.contains('panelActive')
    ) {
      oneWeek.classList.replace('panelActive', 'panel');
    }

    if (event.target.id == 'twoWeeks' && twoWeeks.classList.contains('panel')) {
      twoWeeks.classList.replace('panel', 'panelActive');
    } else if (
      event.target.id == 'twoWeeks' &&
      twoWeeks.classList.contains('panelActive')
    ) {
      twoWeeks.classList.replace('panelActive', 'panel');
    }

    if (event.target.id == 'month' && month.classList.contains('panel')) {
      month.classList.replace('panel', 'panelActive');
    } else if (
      event.target.id == 'month' &&
      month.classList.contains('panelActive')
    ) {
      month.classList.replace('panelActive', 'panel');
    }
  }
}
