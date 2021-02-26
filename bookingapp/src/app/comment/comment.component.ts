import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() value!: number; //event id of current event card that's opened



  count: number = 0;

  constructor() { }

  receiveCommentCount($event:number) {
    this.count = $event;
   
  }

  ngOnInit(): void {
  }

}
