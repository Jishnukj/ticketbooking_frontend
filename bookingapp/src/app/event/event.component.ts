import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { EventService } from './../services/event.service';
import {Event} from '../models/event';
import{FormControl} from '@angular/forms';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  providers: [EventService]
})
export class EventComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private service :EventService
    ) { }
  public id! : number;
  public Event!: Event[];
  ticket=new FormControl();
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getEvent(this.id).subscribe(data=>{
      this.Event = data;
      console.log(data);

    });
  }


}
