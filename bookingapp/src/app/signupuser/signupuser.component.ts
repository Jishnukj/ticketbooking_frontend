import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from '../models/user';
import { SignupserviceService } from '../services/signupservice.service';
import {FormControl} from '@angular/forms'
 
@Component({
  selector: 'app-signupuser',
  templateUrl: './signupuser.component.html',
  styleUrls: ['./signupuser.component.scss']
})
export class SignupuserComponent implements OnInit {

  isIncorrect: boolean = false;
  constructor(private fb: FormBuilder, private signupservice : SignupserviceService) { }
  ngOnInit(): void {
  }
  
  newUser = new User();
  isArtist:boolean=false;
  userSignUpForm = this.fb.group({
    name: [''],
    email: [''],
    password: [''],
    confirmPassword: [''],
    bandname: ['']
  });

  onSubmit(){
    if(this.userSignUpForm.controls['password'].value !== this.userSignUpForm.controls['confirmPassword'].value){
      this.isIncorrect = true;
    }else{
      this.newUser.user_name = this.userSignUpForm.controls['name'].value;
      this.newUser.password = this.userSignUpForm.controls['password'].value;
      this.newUser.email = this.userSignUpForm.controls['email'].value;
      this.newUser.band_name = this.userSignUpForm.controls['bandname'].value;
      if(this.newUser.band_name === ''){
        this.newUser.user_type = 'user'
      }
      else{
        this.newUser.user_type = 'artist';
      }
      console.log(this.newUser);

      this.signupservice.signUpUser(this.newUser).subscribe(res=>{
        if(res.toString() == "true"){
          alert("Registration Successful!");
        }
        else{
          alert("Registration Failed");
        }
      
      });
      this.userSignUpForm.reset(this.userSignUpForm.value);
}
}
}
