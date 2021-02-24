import { Component, OnInit } from '@angular/core';
/**
 * This component serves as the navigation bar of the website.
 */
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
signUp:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
