import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() postComments: Array<any> = [];

  constructor() { }
  
  ping(){
    console.log(this.postComments);
    console.log(Object.values(this.postComments));
    
  }
  

  ngOnInit(): void {
    
  }

}
