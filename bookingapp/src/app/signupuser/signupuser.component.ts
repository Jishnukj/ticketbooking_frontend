import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from '../models/user';
import { SignupserviceService } from '../services/signupservice.service';

@Component({
  selector: 'app-signupuser',
  templateUrl: './signupuser.component.html',
  styleUrls: ['./signupuser.component.scss']
})
export class SignupuserComponent implements OnInit {

  isIncorrect: boolean = false;
  constructor(private fb: FormBuilder, private signupservice : SignupserviceService) { }
  
  newUser = new User();
  
  userSignUpForm = this.fb.group({
    name: [''],
    email: [''],
    password: [''],
    confirmPassword: [''],
  });

  onSubmit(){
    if(this.userSignUpForm.controls['password'].value !== this.userSignUpForm.controls['confirmPassword'].value){
      this.isIncorrect = true;
    }else{
      this.newUser.user_name = this.userSignUpForm.controls['name'].value;
      this.newUser.password = this.userSignUpForm.controls['password'].value;
      this.newUser.email = this.userSignUpForm.controls['email'].value;
      console.log(this.newUser);

      this.signupservice.signUpUser(this.newUser);
    }
  }

  ngOnInit(): void {
  }

}
