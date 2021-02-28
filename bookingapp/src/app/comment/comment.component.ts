import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() value!: number; //event id of current event card that's opened

  comments: Array<object> = [];
  

  count: number = 0;

  constructor() { }

  receiveCommentCount($event:number) {
    this.count = $event;
   
  }

  receiveComments($event:Array<object>){
    this.comments = $event;
    console.log(this.comments);
   }

  ngOnInit(): void {
  }

}
