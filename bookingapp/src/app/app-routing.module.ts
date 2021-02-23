import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventCardComponent } from './event-card/event-card.component';
import { EventComponent } from './event/event.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomePageComponent },
  { path: 'event', component: EventComponent },
  { path: 'event-card', component: EventCardComponent },
  { path: 'payment', component: PaymentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
