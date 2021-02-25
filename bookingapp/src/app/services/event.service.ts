import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams } from "@angular/common/http";
import { NgControlStatus } from '@angular/forms';

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
