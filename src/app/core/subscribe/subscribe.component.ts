import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CheckoutPopupComponent } from '../checkout-popup/checkout-popup.component';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss'],
})
export class SubscribeComponent implements OnInit {
  beverage = new FormControl('_____');
  coffeeType = new FormControl('_____');
  howMuchCoffee = new FormControl('_____');
  grind = new FormControl('_____');
  delivery = new FormControl('_____');
  price: string = '';
  priceForWeek: string = '7.20';
  priceForTwoWeeks: string = '9.60';
  priceForMonth: string = '12.00';

  grindDisabled: boolean = false;

  constructor(private router: Router, private modalService: NgbModal) {}

  ngOnInit(): void {
    if (this.router.url == '/subscribe') {
      window.scrollTo(0, 0);
    }
  }

  toggleFunc(event: any) {
    event.target.classList.toggle('active');

    let panel = event.srcElement.nextElementSibling;
    let path = event.target.lastChild;

    if (panel.style.display === 'flex') {
      panel.style.display = 'none';
      path.innerHTML =
        "<path d='M15.9486 0.585815L18.777 3.41424L9.68136 12.5099L0.585693 3.41424L3.41412 0.585815L9.68091 6.85303L15.9486 0.585815Z' fill='#0E8784'/>";
    } else {
      panel.style.display = 'flex';
      path.innerHTML =
        "<path d='M15.9486 12.5099L18.777 9.68146L9.68136 0.585796L0.585693 9.68146L3.41412 12.5099L9.68091 6.24267L15.9486 12.5099Z' fill='#0E8784'/>";
    }

    if (panel.style.maxHeight) {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  }
  onClick() {}

  isCapsule(event: any) {
    if (event.target.checked == true) {
      this.grindDisabled = true;
    }
    (
      document.getElementById('disabledButton') as HTMLButtonElement
    ).classList.add('buttonDisabled');
    (
      document.getElementById('grindOption') as HTMLParagraphElement
    ).classList.add('buttonDisabled');
  }

  noCapsule(event: any) {
    if (event.target.checked == true) {
      this.grindDisabled = false;
    }
    (
      document.getElementById('disabledButton') as HTMLButtonElement
    ).classList.remove('buttonDisabled');
    (
      document.getElementById('grindOption') as HTMLParagraphElement
    ).classList.remove('buttonDisabled');
  }

  onChangeSummary() {
    if (this.grindDisabled == true) {
      (document.querySelector('.beverage') as HTMLSpanElement).innerText = this
        .beverage.value as string;
      (document.querySelector('.coffeeType') as HTMLSpanElement).innerText =
        this.coffeeType.value as string;
      (document.querySelector('.howMuchCoffee') as HTMLSpanElement).innerText =
        this.howMuchCoffee.value as string;
      (document.querySelector('.delivery') as HTMLSpanElement).innerText = this
        .delivery.value as string;
    } else {
      (document.querySelector('.beverage') as HTMLSpanElement).innerText = this
        .beverage.value as string;
      (document.querySelector('.coffeeType') as HTMLSpanElement).innerText =
        this.coffeeType.value as string;
      (document.querySelector('.howMuchCoffee') as HTMLSpanElement).innerText =
        this.howMuchCoffee.value as string;
      (document.querySelector('.grinded') as HTMLSpanElement).innerText = this
        .grind.value as string;
      (document.querySelector('.delivery') as HTMLSpanElement).innerText = this
        .delivery.value as string;
    }
  }

  priceCalcShipment() {
    if (this.howMuchCoffee.value == '250g') {
      this.priceForWeek = '7.20';
      this.priceForTwoWeeks = '9.60';
      this.priceForMonth = '12.00';
    }
    if (this.howMuchCoffee.value == '500g') {
      this.priceForWeek = '13.00';
      this.priceForTwoWeeks = '17.50';
      this.priceForMonth = '22.00';
    }
    if (this.howMuchCoffee.value == '1000g') {
      this.priceForWeek = '22.00';
      this.priceForTwoWeeks = '32.00';
      this.priceForMonth = '42.00';
    }
  }

  finalPriceCalc() {
    console.log(this.price);
    if (this.delivery.value == 'Every week') {
      this.price = this.priceForWeek;
    }
    if (this.delivery.value == 'Every 2 weeks') {
      this.price = this.priceForTwoWeeks;
    }
    if (this.delivery.value == 'Every month') {
      this.price = this.priceForMonth;
    }
  }

  open() {
    const modalRef = this.modalService.open(CheckoutPopupComponent);
    modalRef.componentInstance.beverage = this.beverage.value;
    modalRef.componentInstance.coffeeType = this.coffeeType.value;
    modalRef.componentInstance.howMuchCoffee = this.howMuchCoffee.value;
    modalRef.componentInstance.grind = this.grind.value;
    modalRef.componentInstance.delivery = this.delivery.value;
    modalRef.componentInstance.price = this.price;
  }
}
