import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BookingService } from '../services/booking.service';
import{Router,ActivatedRoute} from '@angular/router';



/** this component shows the ticket sale of an event
 * It contains
 * 
 * 1- booking  Id
 * 2- name of the user who purchased the ticket
 * 3- date on which the ticket is purchased
 * 4- number of seats booked
 * 5- total price of tickets
 */

@Component({
  selector: 'app-ticket-sale',
  templateUrl: './ticket-sale.component.html',
  styleUrls: ['./ticket-sale.component.scss']
})
export class TicketSaleComponent implements OnInit {
  bookingList:any;
  id!:number;
 
  constructor(private bookingService : BookingService, private http:HttpClient,private route:ActivatedRoute) { }
 
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
      this.bookingService.getBookingByEventId(this.id).subscribe((data:any )=>{
        this.bookingList=data;
        console.log(this.bookingList)
});
  }
  

}
  

  
  



