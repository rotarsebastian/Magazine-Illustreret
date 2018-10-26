import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.messageForm.invalid) {
      return;
    }
    this.success = true;
  }

  ngOnInit() {

  }

}
