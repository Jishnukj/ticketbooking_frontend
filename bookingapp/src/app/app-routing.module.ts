import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {VenuesComponent} from './venues/venues.component';
import {AddEditVenueComponent} from './add-edit-venue/add-edit-venue.component';
import { EventComponent } from './event/event.component';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {EventDetailComponent} from './event-detail/event-detail.component';
import{ TicketSaleComponent} from './ticket-sale/ticket-sale.component';
import{ AdminRegisterComponent} from './admin-register/admin-register.component';
import { PaymentComponent } from './payment/payment.component';
import { ArtistPageComponent } from './artist-page/artist-page.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { CreateEventComponent } from './create-event/create-event.component';


const routes: Routes = [{path : '',component : HomePageComponent},
{path: 'venues', component: VenuesComponent},
{path: 'add-edit-venue', component:AddEditVenueComponent },
{path: 'event-detail/:id', component: EventDetailComponent},
{path: 'booking/:rate', component: TicketSaleComponent},
{path : 'event/:id', component: EventComponent},
{path : 'admin', component: AdminRegisterComponent},
{path:'payment/:price/:tickets',component:PaymentComponent,canActivate:[AuthGuard]},
{path:'artist-page',component:ArtistPageComponent,canActivate:[AuthGuard]},
{path:'events',component:AdminHomeComponent,canActivate:[AuthGuard]},
{path:'login',component:LoginComponent},
{path:'add-event',component:CreateEventComponent}
];
 



@NgModule({
  imports: [RouterModule.forRoot(routes)],
 




exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponent = [HomePageComponent,EventComponent,PaymentComponent];
