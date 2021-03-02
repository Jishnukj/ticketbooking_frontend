import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  private _currentUserId = new BehaviorSubject<string>('');
  private _currentUserName = new BehaviorSubject<string>('');
  private _currentUserType = new BehaviorSubject<string>('');
  private eventId = new BehaviorSubject<number>(0);
  
  setEventId(id:number){
    this.eventId.next(id);
  }
  getEventId(){
    return this.eventId.asObservable();
  }
  setCurrentUserId(id: string){
    this._currentUserId.next(id);
  }
  getCurrentUserId():Observable<string>{
    return this._currentUserId.asObservable();
  }
  setCurrentUserName(name:string){
    this._currentUserName.next(name);
  }
  getCurrentUserName():Observable<string>{
    return this._currentUserName.asObservable();
  }
  setCurrentUserType(usertype:string){
    this._currentUserType.next(usertype);
  }
  getCurrentUserType():Observable<string>{
    return this._currentUserType.asObservable();
  }
}
