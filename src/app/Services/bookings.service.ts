import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking, BookingReq, BookingResponse } from '../Models/Booking';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(private http:HttpClient) { }
  private Base_URL = "http://localhost:3000/bookings/"

  getBookings():Observable<Booking[]>{
    return this.http.get<Booking[]>(this.Base_URL)
  }
  getBooking(id:string):Observable<Booking>{
    return this.http.get<Booking>(this.Base_URL+id)
  }
  getUserBooking(id:string):Observable<Booking>{
    return this.http.get<Booking>(this.Base_URL+"user/"+id)
  }
  addBooking(addBooking:BookingReq):Observable<BookingResponse>{
    return this.http.post<BookingResponse>(this.Base_URL, {addBooking})
  }
  updateBooking(id:string,updatedBooking:BookingReq):Observable<BookingResponse>{
    return this.http.put<BookingResponse>(this.Base_URL+id, updatedBooking)
  }
  deleteBooking(id :string):Observable<BookingResponse>{
    return this.http.delete<BookingResponse>(this.Base_URL+id)
  }
}
