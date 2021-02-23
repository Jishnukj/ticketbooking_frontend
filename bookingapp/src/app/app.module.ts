import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EventCardComponent } from './event-card/event-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { EventComponent } from './event/event.component';
import { PaymentComponent } from './payment/payment.component';
import { ArtistRegisterComponent } from './artist-register/artist-register.component';
import { CreateEventComponent } from './create-event/create-event.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    EventCardComponent,
    SearchBarComponent,
    EventComponent,
    PaymentComponent,
    ArtistRegisterComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
