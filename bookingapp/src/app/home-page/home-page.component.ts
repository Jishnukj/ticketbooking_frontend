import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event } from '../models/event';
import { FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';

/**
 * This component serves as the home page of the website.
 */
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [EventService],
})
export class HomePageComponent implements OnInit {
  myDate:Date=new Date();
  value!:string;
  latestdate!:string;
  type: string = 'text';
  search = new FormControl('');
  selector: number = 1;
  constructor(private readonly service: EventService,
    public datepipe: DatePipe) {}
  public Events!: Event[];
  ngOnInit(): void {
    this.service.getUpcomingApprovedEvents().subscribe((response) => {
      this.Events = response;
      console.log(response);
    
    });

    this.latestdate =((this.datepipe.transform(this.myDate, 'dd-MM-yy')))!;
    console.log(this.latestdate);
    
  }
  onClickSearch(): void {
    if (this.search.value !== '') {
      if (this.selector == 1) {
        this.service.getUpcomingEvents().subscribe((events) => {
          this.Events = events.filter(
            (event) => event.artist_name === this.search.value
          );
        });
      }
      if (this.selector == 2) {
        this.service.getUpcomingEvents().subscribe((events) => {
          this.Events = events.filter(
            (event) => event.venue_name === this.search.value
          );
        });
      }
      if (this.selector == 3) {
        this.service.getUpcomingEvents().subscribe((events) => {
          console.log(this.search.value);
          
          
          this.Events = events.filter(
            (event) => this.datepipe.transform(event.event_date,'yyyy-MM-dd') === this.search.value
          );
        });
      }
      if (this.selector == 4) {
        this.service.getUpcomingEvents().subscribe((events) => {
          this.Events = events.filter(
            (event) => event.event_name === this.search.value
          );
        });
      }
    } else {
      this.service.getUpcomingEvents().subscribe((response) => {
        this.Events = response;
        console.log(response);
      });
    }
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
  changeInput(): void {
    if (this.selector == 3) {
      this.type = 'date';
      this.latestdate =((this.datepipe.transform(this.myDate, 'dd-mm-yyyy')))!
      this.search.setValue(this.latestdate);
    } else {
      this.type = 'text';
     this.search.setValue('');
    }
  }
}
