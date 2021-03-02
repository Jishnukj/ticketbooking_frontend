import { Component, OnInit,Input } from '@angular/core';
import { EventService } from '../services/event.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AdminEvent} from '../models/admin-event'
import{Router,ActivatedRoute} from '@angular/router';
/** this component shows the details of a single event
 * It contains
 * 
 * 1- event Id
 * 2- name of event
 * 3- artist
 * 4-venue of event
 * 5- date of event
 * 6-time of event
 * 7-description
 * 
 * if the events are not yet approved by admin,the page will display with an approve and reject button
 * for the approved events,a ticket sale link will be displayed which redirects to ticket sale component
 */

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})

export class EventDetailComponent implements OnInit {
  public id! : number;
  public eventlist: AdminEvent[]=[];

  constructor(private eventService : EventService, private http:HttpClient,private route:ActivatedRoute,
                  private router:Router) { 
    
  }
  
    

  ngOnInit(): void {
    
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.eventService.getEventById(this.id).subscribe(data=>{
      this.eventlist = data;
      console.log(this.eventlist);
      

    });
  
  }

  approve(event:AdminEvent)
  {
    event.approval_status="approved";
    this.eventService.postApprove(event).subscribe(data=>{
      console.log(data)});
    console.log(event.approval_status);
  }

  reject(event:AdminEvent)
  {
    event.approval_status="rejected";
    this.eventService.postApprove(event).subscribe(data=>{
      console.log(data)});
    console.log(event.approval_status);
    
    
  }

}

