import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private readonly http: HttpClient) { }
  private readonly apiurl="https://localhost:44332/api/Booking"
  getAllBookings(): Observable<any>
  {
      return this.http.get<any>(this.apiurl+'/allbooking');
  }
}
