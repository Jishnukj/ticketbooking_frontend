import { Component, OnInit,Input } from '@angular/core';
import { EventService } from '../services/event.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AdminEvent} from '../models/admin-event'
import{Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})

export class EventDetailComponent implements OnInit {
  public id! : number;
  public eventlist: AdminEvent[]=[];
  //eventlist:any=[];
  constructor(private eventService : EventService, private http:HttpClient,private route:ActivatedRoute) { 
    
  }
  
    

  ngOnInit(): void {
    
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.eventService.getEventById(this.id).subscribe(data=>{
      this.eventlist = data;
      console.log(this.eventlist);

    });
  
  }

  //reject(event:AdminEvent)
  //{
    
 // }
  approve(event:AdminEvent)
  {
    event.approval_status="true";
    this.eventService.postApprove(event).subscribe(data=>{
      console.log(data)});
    console.log(event.approval_status);
  }

}

