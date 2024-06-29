import { Injectable } from '@angular/core';
import { Hotel, HotelReq, HotelResponse } from '../Models/Hotels';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  constructor( private http:HttpClient) { }

  private readonly Base_URL = "http://localhost:3000/hotels/"

  getHotels():Observable<Hotel[]>{
    return this.http.get<Hotel[]>(this.Base_URL)
  }
  getHotel(id:string):Observable<Hotel>{
    console.log("Reachitng to get")
    return this.http.get<Hotel>(this.Base_URL+id)
  }
  addHotel(addHotel:HotelReq):Observable<HotelResponse>{
    return this.http.post<HotelResponse>(this.Base_URL, addHotel)
  }
  updateHotel(id:string,updatedHotel:HotelReq):Observable<HotelResponse>{
    return this.http.put<HotelResponse>(this.Base_URL+id, updatedHotel)
  }
  deleteHotel(id :string):Observable<HotelResponse>{
    return this.http.delete<HotelResponse>(this.Base_URL+id)
  }

}
