import { Injectable,Injector} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }
  intercept(req:any, next:HttpHandler){
      let authService = this.injector.get(AuthService);
      let tokenizedReq = req.clone({
        setHeader:{
          Authorization:`Bearer ${authService.getToken}`
        }
      })
      return next.handle(tokenizedReq)
  }
}