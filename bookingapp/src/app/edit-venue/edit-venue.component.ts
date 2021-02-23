import { Component, OnInit } from '@angular/core';
/** this component allows the admin to edit existing venue or add new venue
 * It contains
 * 
 * 1- venue Id
 * 2- name of venue
 * 3- seating capacity
 * 4- ticket price per seat

 */
@Component({
  selector: 'app-edit-venue',
  templateUrl: './edit-venue.component.html',
  styleUrls: ['./edit-venue.component.scss']
})
export class EditVenueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
