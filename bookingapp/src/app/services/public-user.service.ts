import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicUserService {

  constructor(private readonly http: HttpClient) { }
  private readonly apiurl="https://localhost:44332/api/User"
  getUsers(): Observable<any>
  {
      return this.http.get<any>(this.apiurl);
  }
  getUserById(id:number): Observable<any>
  {
      return this.http.get<any>(this.apiurl+`/${id}`);
  }
}
