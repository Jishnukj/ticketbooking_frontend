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
import { TicketSaleComponent } from './ticket-sale/ticket-sale.component';
import { VenuesComponent } from './venues/venues.component';
import { EditVenueComponent } from './edit-venue/edit-venue.component';
import { CommentComponent } from './comment/comment.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

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
    CreateEventComponent,
    TicketSaleComponent,
    VenuesComponent,
    EditVenueComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
