import { Injectable,Injector} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }
  intercept(req:HttpRequest<any>, next:HttpHandler){
      let authService = this.injector.get(AuthService);
      let token = authService.getToken();
      let tokenizedReq = req.clone({
        setHeaders:{
          Authorization: `Bearer ${token}`
        },
      })
      return next.handle(tokenizedReq)
  }
}
