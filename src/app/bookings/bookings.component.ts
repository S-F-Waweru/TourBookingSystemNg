import { Component, OnInit } from '@angular/core';
import { BookingsService } from '../Services/bookings.service';
import { Booking } from '../Models/Booking';
import { CommonModule } from '@angular/common';
import { ToursService } from '../Services/tours.service';
import { HotelsService } from '../Services/hotels.service';
import { Observable, map } from 'rxjs';
import { Tour } from '../Models/Tour';
import { Hotel } from '../Models/Hotels';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css',
})
export class BookingsComponent implements OnInit {
  constructor(
    private bs: BookingsService,
    private hs: HotelsService,
    private ts: ToursService,
    private route :Router
  ) {}
  bookings!: Booking[];
  tourNames: { [key: string]: string } = {};
  tourLocations: { [key: string]: string } = {};
    hotelNames: { [key: string]: string } = {};

  ngOnInit(): void {
    const userId = localStorage.getItem('userId') as string;
    if (userId) {
      this.bs.getUserBooking(userId).subscribe(
        (res) => {
          this.bookings = res;
          console.log(this.bookings)
          this.loadBookings()
          console.log(this.tourNames)
        },
        (err) => {
          console.log(err.error);
        }
      )
    }
  }
  

  deleteBooking(id:string){
    this.bs.deleteBooking(id).subscribe(res=>{
      console.log(res.message)
    })
  }
    updateBooking(id:string){
      console.log(id)
      this.route.navigate(['bookings', 'updateBooking', id])
    }






  getTourName(tourid: string): Observable<string> {
    return this.ts.getTour(tourid).pipe(
      map((tour: Tour) => tour.Name)
    );
  }

  getTourLocation(tourid: string) :Observable<string> {
    return this.ts.getTour(tourid).pipe(
      map((tour: Tour) => tour.Destination)
    );
  }
    getTourHotel(hotelId:string) {
      return this.hs.getHotel(hotelId).pipe(
        map((hotel: Hotel) => hotel.Name)
      );
  }



  loadBookings() {
    console.log('Bookings' )
    console.log(this.bookings);
     
    this.bookings.forEach(booking => {

      

      this.getTourName(booking.TourId).pipe(
        map(name => {
          
          this.tourNames[booking.Id] = name;
        })
      ).subscribe();
      this.getTourHotel(booking.HotelId).pipe(
        map(name => {
        
          this.hotelNames[booking.Id] = name;
        })
      ).subscribe();
      
      this.getTourLocation(booking.TourId).pipe(
        map(name => {
         
          this.tourLocations[booking.Id] = name;
        })
      ).subscribe();
    });
  }















//   getTourHotel(hotelId:string) {
//     this.hs.getHotel(hotelId).subscribe(res =>{
//       return res.Name
//     },
//     err =>{
//       console.log(err.error)
//     })
//   }
//   // getBookinDate() {}
}
