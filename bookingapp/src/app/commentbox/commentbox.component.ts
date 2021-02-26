import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-commentbox',
  templateUrl: './commentbox.component.html',
  styleUrls: ['./commentbox.component.scss']
})
export class CommentboxComponent implements OnInit {

  commentInfo: Array<object> = [];
  submitted: Boolean = false;
  count: number = 0;
  public id = 0;

  @Output() commentCount = new EventEmitter<number>();

  

  constructor(private fb: FormBuilder) { }

  commentForm = this.fb.group({
    comment : ['']
  });

  onSubmit(){
    console.log(this.commentForm.value);
    this.commentInfo.push({
      commentId : this.id++,
      currentDate : new Date(),
      commentTxt: this.commentForm.controls['comment'].value,
      replyComment: []
    });

    console.log(this.commentInfo);
    this.count += 1;
    this.commentCount.emit(this.count);
  
  }

  ngOnInit(): void {
  }

}
