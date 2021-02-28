import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SignupserviceService } from '../services/signupservice.service';

@Component({
  selector: 'app-signupuser',
  templateUrl: './signupuser.component.html',
  styleUrls: ['./signupuser.component.scss']
})
export class SignupuserComponent implements OnInit {

  isIncorrect: boolean = false;
  constructor(private fb: FormBuilder, private signupservice : SignupserviceService) { }
  

  
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
      let newUser = {
        name: this.userSignUpForm.controls['name'],
        email: this.userSignUpForm.controls['email'],
        password: this.userSignUpForm.controls['password']
      }

      this.signupservice.signUpUser(newUser);
    }
  }

  ngOnInit(): void {
  }

}
