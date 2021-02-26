import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private _authservice: AuthService,
    private _router:Router){}
  canActivate():boolean{
    if(this._authservice.loggedIn()){
      return true;
    }else{
      this._router.navigate(['']);
      return false;
    }
  }
  
}