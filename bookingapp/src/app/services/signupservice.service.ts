import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {

  constructor(private http: HttpClient) { }
  public apiurl = 'https://localhost:44332/api/User/register/User';
  response = false;
  signUpUser(newUser:Object){
    console.log(newUser);
    return this.http.post(this.apiurl, newUser);
  }
}
