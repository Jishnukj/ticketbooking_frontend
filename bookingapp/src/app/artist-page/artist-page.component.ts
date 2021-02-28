import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event } from '../models/event';
@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.scss'],
  providers:[EventService],
})
export class ArtistPageComponent implements OnInit {

  constructor(private readonly service: EventService) { }
  public Events!: Event[];
  ngOnInit(): void {
    this.service.getUpcomingEvents().subscribe((response) => {
      this.Events = response;
      console.log(response);
      // this.Events =events.filter(event=>event.artist_name===) ;
      // console.log(response);
    });
  }

}
