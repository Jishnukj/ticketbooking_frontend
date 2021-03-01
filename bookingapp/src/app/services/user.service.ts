import { Injectable } from '@angular/core';
import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  GetUser(id:string){
    return this.http.get<User>(`https://localhost:44332/api/User/${id}`).subscribe(res=>
    {
      console.log(res);
    });
  }
}
