import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private readonly http: HttpClient) { }
  private readonly apiurl="https://localhost:44332/api/Admin/register/admin"

  postAdmin(val:any)
  {
     return this.http.post(this.apiurl,val);
  }

}

