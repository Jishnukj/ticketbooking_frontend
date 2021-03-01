import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  private _currentUserId = new Subject<string>();
  private _currentUserName = new Subject<string>();
  private _currentUserType = new Subject<string>();
  
  currentUserId$ = this._currentUserId.asObservable();
  currentUserName$ = this._currentUserName.asObservable();
  currentUserType$ = this._currentUserType.asObservable();

  setCurrentUserId(id: string){
    this._currentUserId.next(id);
  }
  setCurrentUserName(name:string){
    this._currentUserName.next(name);
  }
  setCurrentUserType(usertype:string){
    this._currentUserType.next(usertype);
  }
}
