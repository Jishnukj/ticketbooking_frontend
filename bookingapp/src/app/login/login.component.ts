import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[AuthService],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private _authService:AuthService,
    private fb:FormBuilder
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

  }

}
