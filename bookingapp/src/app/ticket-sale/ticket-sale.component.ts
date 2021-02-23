import { Component, OnInit } from '@angular/core';
/** this component shows the ticket sale of an event
 * It contains
 * 
 * 1- ticket Id
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

  constructor() { }

  ngOnInit(): void {
  }

}
