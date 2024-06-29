import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Tour } from '../Models/Tour';
import { ToursService } from '../Services/tours.service';
import { HotelsService } from '../Services/hotels.service';
import { Hotel } from '../Models/Hotels';
import { BookingsService } from '../Services/bookings.service';

@Component({
  selector: 'app-add-booking',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-booking.component.html',
  styleUrl: './add-booking.component.css'
})
export class AddBookingComponent {
  constructor(private activateroute: ActivatedRoute, private bs:BookingsService,private ts: ToursService, private hs: HotelsService) { }
  form!: FormGroup
  tourId !: string
  tourname!: string
  hotels : Hotel[] = []
  ngOnInit(): void {

    this.activateroute.paramMap.subscribe(params => {
      const tourId = params.get('id')
      if (tourId) {
        // gettour with same location
        this.ts.getTour(tourId).subscribe(tour => {
          console.log(tour.Id)
          this.tourId = tour.Id
         
          console.log(tourId)
          this.tourname = tour.Name
          console.log(this.tourname)

          // init form
          this.form = new FormGroup({
            TourId: new FormControl(this.tourId, Validators.required),
            HotelId: new FormControl(null, Validators.required),
            BookingDate: new FormControl(null, Validators.required),
          })
      


          //get hotels
          this.hs.getHotels().subscribe(hotels =>{
            if(hotels){
              this.hotels = hotels
             
             
             let tourHotels = this.hotels.filter(h=>h.Location.toLocaleLowerCase() === tour.Destination.toLocaleLowerCase())
              if(tourHotels){
                this.hotels = tourHotels as Hotel[]
                console.log(this.hotels)
              }
            }
            
            
    
          }, err => {
            console.log(err.error)
          })



        }, err => {
          console.log(err.error)
        })
      }
    })
   
  }

  onSubmit() {
    console.log(this.form.value)
    this.bs.addBooking(this.form.value).subscribe(res =>{
      console.log(res.message)

    },err =>{
        console.log(err.error)
    })
  }
}
