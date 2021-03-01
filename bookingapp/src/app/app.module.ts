import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { CommentComponent } from './comment/comment.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AddEditVenueComponent } from './add-edit-venue/add-edit-venue.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { ArtistPageComponent } from './artist-page/artist-page.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { LoginComponent } from './login/login.component';
import { DatePipe } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { SignupuserComponent } from './signupuser/signupuser.component';
import { SignupserviceService } from './services/signupservice.service';
import { SharedService } from './services/shared.service';
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
    CommentComponent,
    AdminNavbarComponent,
    AddEditVenueComponent,
    AdminHomeComponent,
    EventDetailComponent,
    AdminRegisterComponent,
    ArtistPageComponent,
    LoginComponent,
    SignupComponent,
    SignupuserComponent,
  ],
  imports: [
  
  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule, 
    ReactiveFormsModule,
   
  ],
  providers: [SignupserviceService,
    { 
      provide:HTTP_INTERCEPTORS,
    
      useClass:TokenInterceptorService,
      multi:true
     },  DatePipe,SharedService],
  bootstrap: [AppComponent],
  exports:[EventCardComponent]
})
export class AppModule { }
