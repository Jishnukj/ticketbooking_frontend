import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from '../models/user';
import { SignupserviceService } from '../services/signupservice.service';

@Component({
  selector: 'app-artist-register',
  templateUrl: './artist-register.component.html',
  styleUrls: ['./artist-register.component.scss'],
  providers:[SignupserviceService]
})
export class ArtistRegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private signupservice : SignupserviceService) { }

  ngOnInit(): void {
  }
  isIncorrect: boolean = false;
  newUser = new User();
  
  artistRegisterForm = this.fb.group({
    name: [''],
    email: [''],
    password: [''],
    confirmPassword: [''],
    bandname: ['']
  });

  onSubmit(){
    if(this.artistRegisterForm.controls['password'].value !== this.artistRegisterForm.controls['confirmPassword'].value){
      this.isIncorrect = true;
    }else{
      this.newUser.user_name = this.artistRegisterForm.controls['name'].value;
      this.newUser.password = this.artistRegisterForm.controls['password'].value;
      this.newUser.email = this.artistRegisterForm.controls['email'].value;
      this.newUser.user_type = 'artist';
      this.newUser.band_name = this.artistRegisterForm.controls['bandname'].value;
      console.log(this.newUser);

     this.signupservice.signUpUser(this.newUser).subscribe(res=>{
        if(res.toString() == "true"){
          alert("Registration Successful!");
        }
        else{
          alert("Registration Failed");
        }
       });
       this.artistRegisterForm.reset(this.artistRegisterForm.value);
    }
  }

}
