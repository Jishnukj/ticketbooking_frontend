import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  
  constructor(private readonly http: HttpClient) { }

  private readonly apiurl = 'http://localhost:3000/events';
  
  getEvents(): Observable<Event[]>
  {
      return this.http.get<Event[]>(this.apiurl);
  }

  getEvent(id :number): Observable<Event[]>{
    return this.http.get<Event[]>(`http://localhost:3000/events?eventId=`+id);
  }
}
