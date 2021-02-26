import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import{Router} from '@angular/router';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
/** this component shows the register form for registering an admin
 * It contains
 * 
 * 1- user name
 * 2- email
 * 3- password
 * 
 * by default user type is 'admin'
 
 
 */


@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.scss']
})
export class AdminRegisterComponent implements OnInit {
  registerform!: FormGroup ;
  submitted= false;
  admin:any={}
  output:any
  constructor(private adminService : AdminService,public router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.registerform = this.fb.group({
      user_name:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.required],

    });
    this.admin={
      user_name :"",
      email : "",
      password : "",
      user_type : "admin",
      band_name:""

    } 
  }
  register()
  {
    console.log(this.admin)
    this.submitted = true;
    this.adminService.postAdmin(this.admin).subscribe(data=>{
      this.output = data;
      console.log(this.output);
    });
  }

}
