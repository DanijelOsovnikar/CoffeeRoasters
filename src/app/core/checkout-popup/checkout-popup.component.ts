import { Component, Input, OnInit, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-checkout-popup',
  templateUrl: './checkout-popup.component.html',
  styleUrls: ['./checkout-popup.component.scss'],
})
export class CheckoutPopupComponent implements OnInit {
  @Input() beverage: string = '';
  @Input() coffeeType: string = '';
  @Input() howMuchCoffee: string = '';
  @Input() grind: string = '';
  @Input() delivery: string = '';
  @Input() price: number = 0;
  capsuleOff = true;

  constructor() {}

  ngOnInit(): void {
    this.capsule();
  }

  capsule(): void {
    if (this.beverage == 'Capsule') {
      this.capsuleOff = false;
    } else if (this.beverage == 'Filter' || this.beverage == 'Espresso') {
      this.capsuleOff = true;
    }
  }
}
