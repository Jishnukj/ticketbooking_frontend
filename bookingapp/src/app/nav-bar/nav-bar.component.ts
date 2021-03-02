import { Component, OnInit } from '@angular/core';
import{FormControl} from '@angular/forms';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
/**
 * This component serves as the navigation bar of the website.
 */
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  providers:[AuthService]
})
export class NavBarComponent implements OnInit {
signUp:boolean=false;
password= new FormControl('')
  constructor(public auth : AuthService,private _router :Router) { }

  ngOnInit(): void {
  }

  goToSignUp(){
    this._router.navigate(['signupuser']);
  }

}
