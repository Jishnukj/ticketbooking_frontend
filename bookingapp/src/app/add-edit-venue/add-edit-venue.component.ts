import { Component,Input, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import{ActivatedRoute, Router} from '@angular/router';
import { VenueService } from '../services/venue.service';
import {venues} from '../models/venues'

@Component({
  selector: 'app-add-edit-venue',
  templateUrl: './add-edit-venue.component.html',
  styleUrls: ['./add-edit-venue.component.scss']
})
export class AddEditVenueComponent implements OnInit {

  constructor(private venueService:VenueService,private fb:FormBuilder ) { }
  addform!: FormGroup ;
  //venues:any;
  submitted = false; 
  @ Input() Venues !:venues;
  ngOnInit(): void {
    this.addform = this.fb.group({
      venueId:['',Validators.required],
      venueName:['',Validators.required],
      seatingCapacity:['',Validators.required],
      ticketPrice:['',Validators.required],
      
    });
  }
  addVenue(){
    var val = this.Venues
    this.venueService.putVenues(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateVenue(){
   var val= this.Venues
    this.venueService.postVenues(val).subscribe(res=>{
    alert(res.toString());
    });
  }


}
