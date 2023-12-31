import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { SubscribeComponent } from './core/subscribe/subscribe.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CheckoutPopupComponent } from './core/checkout-popup/checkout-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SubscribeComponent,
    NavbarComponent,
    FooterComponent,
    CheckoutPopupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
