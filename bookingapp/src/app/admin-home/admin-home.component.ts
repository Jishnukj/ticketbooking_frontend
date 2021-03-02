import { Component, OnInit } from '@angular/core';
import {AdminEvent} from '../models/admin-event';
import { EventService } from '../services/event.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{Router,ActivatedRoute} from '@angular/router';

/** this component shows the list of events available in the system
 * It contains
 * 
 * 1- event Id
 * 2- name of event
 * 3- artist
 * 4-venue of event
 * 5- date
 
 */
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  eventList:any=[];
  
  
  clickEvent:boolean=false;
  constructor(private eventService : EventService, private http:HttpClient,  private router:Router) { }

  ngOnInit(): void {
    this.refreshEventList();
    
  }

  refreshEventList(){
    this.eventService.getEvents().subscribe((data:any )=>{
      this.eventList=data;
      this.eventList=this.eventList.filter((eventList:AdminEvent)=>eventList.approval_status!=='rejected')
      console.log(this.eventList)
    });
    
  }

  
  onClick(id:number)
  {
    
    this.router.navigate(['/event-detail/',id]);
    this.clickEvent=true;

  }
}
