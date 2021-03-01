import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http'
import { SharedService } from './../services/shared.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[AuthService,SharedService],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private _authService:AuthService,
    private fb:FormBuilder,
    private _router:Router,
    private _shared: SharedService,
    ) { }

  ngOnInit(): void {
    this.createForms();
  }
  private createForms(): void{
    this.loginForm = this.fb.group({
      email: new FormControl(),
      password: new FormControl(),
    });
  }
  

  login(){
    console.log('clicked');
    this._authService.userlogin(this.loginForm).subscribe(res=>{
      localStorage.setItem('token', res.token);
      this.loginForm.get('email')?.value
      if(res.usertype == "admin"){
          console.log(res.usertype);
          this._router.navigate([`events/`]);
      }else if(res.usertype == "artist"){
          this._router.navigate([`artist-page/${res.userid}`]);
      }else{
        const { redirect } = window.history.state;
        this._router.navigateByUrl(redirect || '');
      }
      this._shared.setCurrentUserId(res.userid);
      this._shared.setCurrentUserName(res.username);
      this._shared.setCurrentUserType(res.usertype);
    },
    err=>{
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            this._router.navigate(['login']);
          }
          else{
            console.log(err);
          }
        }
    }
    );
  }

}
