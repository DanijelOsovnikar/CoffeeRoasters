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
  beverage = new FormControl('');
  coffeeType = new FormControl('_____');
  howMuchCoffee = new FormControl('_____');
  grind = new FormControl('_____');
  delivery = new FormControl('_____');
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
  onClick() {}

  isCapsule(event: any) {
    if (event.target.checked == true) {
      this.grindDisabled = true;
    }
  }
  noCapsule(event: any) {
    if (event.target.checked == true) {
      this.grindDisabled = false;
    }
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

  open() {
    const modalRef = this.modalService.open(CheckoutPopupComponent);
    modalRef.componentInstance.beverage = this.beverage.value;
    modalRef.componentInstance.coffeeType = this.coffeeType.value;
    modalRef.componentInstance.howMuchCoffee = this.howMuchCoffee.value;
    modalRef.componentInstance.grind = this.grind.value;
    modalRef.componentInstance.delivery = this.delivery.value;
  }
}
