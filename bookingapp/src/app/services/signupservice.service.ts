import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {

  constructor(private http: HttpClient) { }
  public apiurl = '';
  signUpUser(newUser:Object){
    console.log(newUser);
    this.http.post(this.apiurl, newUser).subscribe((result)=>{console.warn(result);});
  }
}
