import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../models/event';
import { HttpParams } from "@angular/common/http";
import { NgControlStatus, FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class EventService {
  
  constructor(private readonly http: HttpClient) { }


  private readonly apiurl = 'https://localhost:44332/api/Event';
  
  
 getEvents(): Observable<any>
  {
      return this.http.get<any>(this.apiurl);
  }
  
  getUpcomingEvents(): Observable<Event[]>
  {
      return this.http.get<Event[]>('https://localhost:44332/api/Event/UpcomingEvents');
  }

  getEvent(id :number): Observable<Event[]>{
    return this.http.get<Event[]>(`https://localhost:44332/api/Event/`+id);
  }

  createEvent(form: FormGroup){
    console.log("Form value:\n",form.value);
    return this. http.post("https://localhost:44332/api/Event/adding",form.value);
  }
  getEventById(id:number) :Observable<any>
  {
      return this.http.get<any>(`https://localhost:44332/api/Event/${id}`);
  }
  postApprove(event:any)
  {
    console.log(event.event_id,event.approval_status);
    return this.http.post(`https://localhost:44332/api/Event/appove?event_id=${event.event_id}&approve=${event.approval_status}`,event);
  }
 
}
