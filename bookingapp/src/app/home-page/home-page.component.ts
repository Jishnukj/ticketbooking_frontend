import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import {Event} from '../models/event';
import {FormControl} from '@angular/forms'
/**
 * This component serves as the home page of the website.
 */
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [EventService]
})
export class HomePageComponent implements OnInit {
  search= new FormControl('');
  constructor(private readonly service: EventService) { }
  public Events!: Event[];
  ngOnInit(): void {
    this.service.getEvents().subscribe((response)=>{
    this.Events = response;
    console.log(response);
    });
  }

}
