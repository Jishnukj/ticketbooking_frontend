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
    event_id:new FormControl(''),
    image:new FormControl(''),
    event_name:new FormControl(''),
    event_date:new FormControl(''),
    event_time:new FormControl(''),
    venue_id:new FormControl(''),
    available_seats:new FormControl(''),
    artist_name:new FormControl(''),
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
