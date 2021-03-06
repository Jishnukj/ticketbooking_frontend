import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { venues } from './../models/venues';
@Injectable({
  providedIn: 'root'
})
export class VenueService {

  
  constructor(private readonly http: HttpClient) { }

  private readonly apiurl = 'https://localhost:44332/api/Venue';
  private readonly url='https://localhost:44332/api/Venue?id=';
  
  getVenues(): Observable<any>
  {
      return this.http.get<any>(this.apiurl+'/allVenues');
  }
  putVenues(val:any)
  {
    return this.http.patch(`${this.url}${val.venue_id}`,val);
  }
  postVenues(val:any)
  {
     return this.http.post(this.apiurl,val);
  }
  getVenueById(id:number): Observable<any>
  {
      return this.http.get<any>(this.apiurl+`/${id}`);
  }
  getVenueByDate(date:string){
     return this.http.get<venues[]>(`https://localhost:44332/api/Venue/availableVenues/${date}`);
  }
}
