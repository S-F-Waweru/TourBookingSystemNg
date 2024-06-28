import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-booking',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-booking.component.html',
  styleUrl: './add-booking.component.css'
})
export class AddBookingComponent {
  form! :FormGroup
  ngOnInit(): void {
    this.form = new FormGroup({
      hotelname : new FormControl(null, Validators.required),
      bookingDate : new FormControl(null, Validators.required),
    })
  }

  onSubmit(){

  }
}
