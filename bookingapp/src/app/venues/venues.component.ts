import { Component,Input, OnInit } from '@angular/core';
import { VenueService } from '../services/venue.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {venues} from '../models/venues'

/** this component shows the list of venues available in the system
 * It contains
 * 
 * 1- venue Id
 * 2- name of venue
 * 3- seating capacity
 * 4- ticket price per seat

 */
@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.scss']
})
export class VenuesComponent implements OnInit {

  
  constructor(private venueService : VenueService, private http:HttpClient) { }
  venueList:any=[];
  ModalTitle!: string;
  ActivateAddEditVenueComp:boolean=false;
  venue!:venues;
  ngOnInit(): void {
    this.refreshEmpList();
  }

  refreshEmpList(){
    this.venueService.getVenues().subscribe((data:any )=>{
      this.venueList=data;
      console.log(this.venueList)
    });
  }
  addClick(){
    this.venue={
      venue_id:0,
      venue_name:"",
      total_seats:0,
      ticket_rate:0,
    }
    this.ModalTitle="Add Venue";
    this.ActivateAddEditVenueComp=true;

  }

  editClick(item:venues){
    console.log(item);
    this.venue=item;
    this.ModalTitle="Edit Venue";
    this.ActivateAddEditVenueComp=true;
  }
  closeClick(){
    this.ActivateAddEditVenueComp=false;
    this.refreshEmpList();
  }
}
