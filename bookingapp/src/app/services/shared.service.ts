import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  currentUserId!: string;
  CurrentUserName!: string;
  CurrentUserType!: string;

  setCurrentUserId(id:string){
    this.currentUserId = id;
  }
}
