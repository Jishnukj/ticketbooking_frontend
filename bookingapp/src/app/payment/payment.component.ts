import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../services/booking.service';
import { SharedService } from '../services/shared.service';
import { Event } from './../models/event';
/**
 * This is the component that loads when user clicks on 'Book Now' Button on the event details page.
 * On loading, this component also initializes values of some of the declared variables and also invokes the createForms() method which creates the reactive form for taking the ticket booking data.
 * 
 * 
 * There is an input number field for the user to select the number of seats that he/she wants to book.
 * Based on the seats selected price is generated and is shown for the user
 * 
 * There is a "payment" button that lets the user to proceed with the payment. 
 * If the Payment is successful, the brower will show an alert message that it's successful.
 * 
 * Members:
 * bookingservice - An instance of BookingService which has methods that perform CRUD operations in the database.
 * _shared - An instance of SharedService through which values passed from two other unrelated components are accessed.
 * fb - An instance of the FormBuilder class used to build the form.
 * route - An instance of Activatedroute through which data of components routed from this component is accessed. Here ticket rate and the number of tickets selected for booking is accessed.
 * paymentForm - formdata which holds the data related to payment.
 * ticket_rate - variable used to store the ticket rate accessed through route.
 * numberOfTickets - variable used to store the number of tickets selected for booking.
 * amount - stores the total price of all tickets selected.
 * userId - stores the user Id of the user that books the ticket.
 * userName - stores the name of the user that books the ticket.
 * usetType - stores the acccount type of the user that books the ticket.
 * eventId - stores the event Id of the respective event selected for booking tickets.
 * createForms() - creates bulds the form.
 * pay() - method is involked when the Payment button is clicked. it is through this method that the booking service is called and the booking data is sent to the database.
 * 
 */
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {

  constructor(
    private bookingservice : BookingService,
    private _shared: SharedService,
    private readonly fb: FormBuilder,
    private route:ActivatedRoute,) { }
  @Input() Event!: Event;
  paymentForm!: FormGroup;
  ticket_rate!:number;
  numberOfTickets!:number;
  amount!:number;
  userId!:string;
  userName!:string;
  userType!:string;
  eventId!:number;
  ngOnInit(): void {
    this.ticket_rate = Number(this.route.snapshot.paramMap.get('price'));
    this.numberOfTickets = Number(this.route.snapshot.paramMap.get('tickets'));
    this.amount = this.numberOfTickets*this.ticket_rate;
    this.createForms();
    this._shared.getCurrentUserType().subscribe(res=>{
      this.userType = res;
       })
    this._shared.getCurrentUserName().subscribe(res=>{
     this.userName = res;
    })
    this._shared.getCurrentUserId().subscribe(res=>{
      this.userId = res;
    })
    this._shared.getEventId().subscribe(res=>{
      this.eventId = res;
    })
  }

  private createForms(): void{
    this.paymentForm = this.fb.group({
      tickets: new FormControl(this.numberOfTickets),
      amount: new FormControl(this.amount),
    });
  }
  
  pay():void{
    console.log('User Id: ',this.userId);
    console.log('EventId:',this.eventId);
    console.log(this.numberOfTickets);
    console.log(new Date());
    let booking = {
      user_id : this.userId,
      event_id : this.eventId,
      booking_date : new Date(),
      no_of_tickets : this.numberOfTickets
    };
    console.log(booking);
    this.bookingservice.bookTickets(booking);
  }

}
