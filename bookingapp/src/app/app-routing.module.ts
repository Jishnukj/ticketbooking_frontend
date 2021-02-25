import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {VenuesComponent} from './venues/venues.component';
import {AddEditVenueComponent} from './add-edit-venue/add-edit-venue.component';
import { EventComponent } from './event/event.component';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {EventDetailComponent} from './event-detail/event-detail.component';
import{ TicketSaleComponent} from './ticket-sale/ticket-sale.component';
const routes: Routes = [{path : '',component : HomePageComponent},
{path: 'venues', component: VenuesComponent},
{path: 'add-edit-venue', component:AddEditVenueComponent },
{path: 'events', component: AdminHomeComponent},
{path: 'event-detail/:id', component: EventDetailComponent},
{path: 'booking', component: TicketSaleComponent},
{path : 'event/:id', component: EventComponent},];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponent = [HomePageComponent,EventComponent];
