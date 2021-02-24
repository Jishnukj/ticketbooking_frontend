import { Component, OnInit } from '@angular/core';
/** this component contains the nav bar for ticket sale and edit venue components
 * It contains
 * 
 * 1- View events ,which when clicked will redirect to admin home component
 * 2- View venues , which when clicked will redirect to venues component
 * 
*/

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
