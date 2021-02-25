import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  
  constructor(private readonly http: HttpClient) { }
  
  getUpcomingEvents(): Observable<Event[]>
  {
      return this.http.get<Event[]>('https://localhost:44332/api/Event/UpcomingEvents');
  }

  getEvent(id :number): Observable<Event[]>{
    return this.http.get<Event[]>(`https://localhost:44332/api/Event/`+id);
  }
}
