import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  
  constructor(private readonly http: HttpClient) { }

  private readonly apiurl = 'http://localhost:3000/events';
  
  getEvents(): Observable<any>
  {
      return this.http.get<any>(this.apiurl);
  }

  getEvent(id :number): Observable<any>{
    return this.http.get(`http://localhost:3000/events?eventId=`+id);
  }
}
