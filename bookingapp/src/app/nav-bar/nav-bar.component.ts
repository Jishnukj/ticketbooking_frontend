import { Component, OnInit } from '@angular/core';
import{FormControl} from '@angular/forms';
import { AuthService } from './../services/auth.service';
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
  constructor(public auth : AuthService) { }

  ngOnInit(): void {
  }

}
