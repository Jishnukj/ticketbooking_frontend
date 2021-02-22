import { Component, OnInit } from '@angular/core';
/**
 * This is a search bar component.
 * 
 * User can search the home page by:
 * 1-event 
 * 2-venue 
 * 3-artist
 * 
 * On Search an API call is made to the API endpoint "----"
 * based on the API response one of the folloeing scenario occur
 * 1.if search keyword is valid ,the search result is listed on the home page.
 * 2.if search keyword is invalid, 'No search results found' message is shown in the home page.
 * 
 *  
 */
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
