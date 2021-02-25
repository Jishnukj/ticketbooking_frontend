import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Event } from './../models/event';
/**
 * This is the component that loads when user clicks on 'Book Now' Button on the event details page.
 * 
 * There is an input number field for the user to select the number of seats that he/she wants to book.
 * Based on the seats selected price is generated and is shown for the user
 * 
 * There is a "Continue payment" button that lets the user to proceed with the payment. 
 */
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(
    private readonly fb: FormBuilder,
    private route:ActivatedRoute,) { }
  @Input() Event!: Event;
  paymentForm!: FormGroup;
  ticket_rate!:number;
  ngOnInit(): void {
    this.ticket_rate = Number(this.route.snapshot.paramMap.get('price'));
    this.createForms();
  }

  private createForms(): void{
    this.paymentForm = this.fb.group({
      tickets: new FormControl(),
      amount: new FormControl(),
    });
  }
  public setvalue(){
     this.paymentForm.controls['amount'].setValue(this.ticket_rate*this.paymentForm.controls['tickets'].value);
     console.log(this.paymentForm.controls['tickets'].value);
  }
  pay():void{
    
  }

}
