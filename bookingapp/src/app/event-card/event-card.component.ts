import { Component, OnInit } from '@angular/core';
/**
 * This component shows the details of a single event.
 * 
 * It comtains:
 * 1-A picture
 * 2-Date of the event
 * 3-Event Venue
 * 4-Available Seats
 * 
 */
@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
