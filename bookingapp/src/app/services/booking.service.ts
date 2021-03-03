import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private readonly http: HttpClient) { }
  private readonly apiurl="https://localhost:44332/api/Booking"
  private readonly apiurl_booking = "https://localhost:44332/api/Booking/booking"
  getAllBookings(): Observable<any>
  {
      return this.http.get<any>(this.apiurl+'/allbooking');
  }

  bookTickets(booking: any){
    this.http.post(this.apiurl_booking,booking).subscribe(response => {console.warn(response);
      if(response){
        alert("Booking Successful!");
      }
    });
  }
  getBookingById(id:number): Observable<any>
  {
      return this.http.get<any>(this.apiurl+`/${id}`);
  }
  getBookingByEventId(id:number): Observable<any>
  {
      return this.http.get<any>(this.apiurl+`/eventbooking/${id}`);
  }
}
