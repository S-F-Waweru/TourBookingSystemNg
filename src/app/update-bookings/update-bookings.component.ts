import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookingsService } from '../Services/bookings.service';
import { Booking } from '../Models/Booking';
import { ToursService } from '../Services/tours.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-update-bookings',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './update-bookings.component.html',
  styleUrl: './update-bookings.component.css'
})
export class UpdateBookingsComponent implements OnInit {
  constructor(private activateroute: ActivatedRoute,
    private bs: BookingsService,
     private ts: ToursService

  ) { }
  form: FormGroup = new FormGroup({
    TourId: new FormControl(null, Validators.required),
    HotelId: new FormControl(null, Validators.required),
    BookingDate: new FormControl(null, Validators.required),
  })
  booking!: Booking

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe(params => {
      const bookingId = params.get('id')!
      console.log(bookingId)
      this.bs.getBooking(bookingId).subscribe(res => {
        this.booking = res
        console.log(this.booking)
        //get tour Name
        console.log(this.booking.TourId)
        console.log(this.getTourName(this.booking.TourId).subscribe())
        // get Hotels Name
        // set them
        // /update form
          this.form = new FormGroup({
          TourId: new FormControl(null, Validators.required),
          HotelId: new FormControl(null, Validators.required),
          BookingDate: new FormControl(null, Validators.required),
        })


      },
        err => {
          console.log(err.error)
        }
      )
    })





  }

  getTourName(tourId:string):Observable<string>{
    return this.ts.getTour(tourId).pipe(
      map(tour => tour.Name)
    )
  }

  

  onSubmit() {

  }

}
