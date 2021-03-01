import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  constructor(
    private http:HttpClient,
    private _router:Router
    ) { }
  
  userlogin(form: FormGroup){
    console.log(form.value)
    let mail = form.get('email')?.value;
    mail =mail.replace("@","%40");
    return this.http.post<{token:  string,usertype:string,userid:string,username:string}>(`https://localhost:44332/api/User/login?email=${mail}&password=${form.get('password')?.value}`,form.value);
  }

  loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
  logout(){
    localStorage.removeItem('token');
    this._router.navigate(['']);
  }
}
