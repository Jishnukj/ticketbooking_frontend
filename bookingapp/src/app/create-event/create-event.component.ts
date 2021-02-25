import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventService } from '../services/event.service'

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  createevent= new FormGroup({
    eventId:new FormControl(''),
    imageurl:new FormControl(''),
    eventName:new FormControl(''),
    eventDate:new FormControl(''),
    eventTime:new FormControl(''),
    venueId:new FormControl(''),
    availableSeats:new FormControl(''),
    artistName:new FormControl(''),
    description:new FormControl(''),
    


  })
  










  constructor(private events:EventService) { }

  ngOnInit(): void {
  }
  createevents(){
    //console.log(this.createevent.value);
    this.events.createEvent(this.createevent.value).subscribe((result)=>{
      console.log("get data",result)
    })
  }

}
