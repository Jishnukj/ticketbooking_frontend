import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  
  userlogin(form: FormGroup){
    console.log(form.value)
    let mail = form.get('email')?.value;
    mail =mail.replace("@","%40");
    return this.http.post<{access_token:  string,usertype:string}>(`https://localhost:44332/api/User/login?email=${mail}&password=${form.get('password')?.value}`,form.value);
  }

  loggedIn():boolean{
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
