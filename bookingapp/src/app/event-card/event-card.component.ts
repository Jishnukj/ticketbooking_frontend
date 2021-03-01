import { Component, Input, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import {Event} from '../models/event';
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
  styleUrls: ['./event-card.component.scss'],
  providers: [EventService],
  
})
export class EventCardComponent implements OnInit {
  @Input() Size!:number;
  @Input() Event! : Event;
  constructor() { }
  

  ngOnInit(): void {
    
   
  }

}
