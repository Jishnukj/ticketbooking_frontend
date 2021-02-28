import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { EventService } from '../services/event.service'
import { venues } from './../models/venues';
import { VenueService } from './../services/venue.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
  providers:[VenueService,EventService],
})
export class CreateEventComponent implements OnInit {
  newEvent!: FormGroup;
  venues!: venues[];
  date!:string;
  constructor(private events:EventService , private fb:FormBuilder, private venue :VenueService) { }

  ngOnInit(): void {
    this.createForm();
  }
  private createForm(){
    this.newEvent = this.fb.group({
    event_name:new FormControl(),
    event_date:new FormControl(),
    event_time:new FormControl(),
    venue_id:new FormControl(),
    available_seats:new FormControl(0),
    artist_name:new FormControl(),
    description:new FormControl(),
    approval_status:new FormControl("unchecked")
    });
  }
  createevents(){
    console.log('when venue id =1 ',this.newEvent.controls['venue_id'].value)
    let id = parseInt(this.newEvent.controls['venue_id'].value);
    this.newEvent.controls['venue_id'].setValue(id);
    this.venues.forEach(venue => {
      if(venue.venue_id === id){
        this.newEvent.controls['available_seats'].setValue(venue.total_seats);
      }
    });
    let time = this.newEvent.controls['event_time'].value
    this.newEvent.controls['event_date'].setValue(`${this.date}T${time}:00`);
    this.newEvent.controls['event_time'].setValue(`${this.date}T${time}:00`);
    this.events.createEvent(this.newEvent).subscribe((resp)=>{
      if(resp.toString()==="true"){
        alert("Event Created Successfully");
      }
      else{
        console.log(resp.toString());
      }
    });
  }
  getVenues(){
    this.date = this.newEvent.controls['event_date'].value;
    console.log("Date is:"),
    console.log(this.date);
    this.venue.getVenueByDate(this.date).subscribe(resp=>{
        this.venues = resp;
        console.log(resp);
    });
  }
}
