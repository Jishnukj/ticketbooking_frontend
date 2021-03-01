import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  currentUser!:User;
  setCurrentUser(id:string){
    this.http.get<User>(`https://localhost:44332/api/User/${id}`).subscribe(res=>
    {
      this.currentUser = res;
      console.log('current User:',this.currentUser);
    });
  }
}
