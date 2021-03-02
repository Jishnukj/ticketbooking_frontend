import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from '../models/user';
import { SignupserviceService } from '../services/signupservice.service';
import {FormControl} from '@angular/forms'
/**
 * This component loads when the user clicks Sign Up as User link.
 * On initial loading of this component, the page renders with a reactive form which takes the data of the user to create the user account.
 * Once the form is filled and when the Submit button is clicked, the form data is then used to create a newUser object.
 * The newUser object is passed as argument to the method signUpUser() of the SignupserviceService instance signupservice.
 * The method POST the newUser into the database, thus creating a new user account.
 *  Members:
 * isIncorrect - A boolean variable which returns true of the passwords entered are not matching.
 * newUser - A new instance of User class.
 * fb - instance of Formbuilder class which is used to hold the form data.
 * signupservice - instance of the service SignupserviceService through which the newUser data is added to the database.
 * onSubmit() - a method that invokes when the submit button is clicked.
 */
 
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
