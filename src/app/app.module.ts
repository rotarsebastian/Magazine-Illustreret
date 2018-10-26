import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LandingComponent } from './landing/landing.component';
import { PaymentComponent } from './payment/payment.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SlideshowModule } from 'ng-simple-slideshow';
import { FormsModule } from '@angular/forms';
import { PayComponent } from './pay/pay.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LandingComponent,
    PaymentComponent,
    PayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
    SlideshowModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
