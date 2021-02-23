import { Component, OnInit } from '@angular/core';
/** this component shows the list of venues available in the system
 * It contains
 * 
 * 1- venue Id
 * 2- name of venue
 * 3- seating capacity
 * 4- ticket price per seat

 */
@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.scss']
})
export class VenuesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
