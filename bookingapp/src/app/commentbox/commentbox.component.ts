import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-commentbox',
  templateUrl: './commentbox.component.html',
  styleUrls: ['./commentbox.component.scss']
})
export class CommentboxComponent implements OnInit {

  commentInfo: Array<object> = [];
  submitted: Boolean = false;
  public id = 0;

  

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
  
  }

  ngOnInit(): void {
  }

}
