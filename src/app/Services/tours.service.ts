import { Injectable } from '@angular/core';
import { Tour, TourReq, TourResponse } from '../Models/Tour';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ToursService {
  
  constructor(private http:HttpClient) { }
  private Base_Url = "http://localhost:3000/tours/"

    getTours():Observable<Tour[]>{
      return this.http.get<Tour[]>(this.Base_Url)
    }
    getTour(id : string):Observable<Tour>{
      return this.http.get<Tour>(this.Base_Url+id)
    }
    addTour(addTour:TourReq):Observable<TourResponse>{
      console.log(addTour)
      return this.http.post<TourResponse>(this.Base_Url, addTour)
    }
 
    updateTour(id:string,updatedTour:TourReq):Observable<TourResponse>{
      return this.http.put<TourResponse>(this.Base_Url+id, updatedTour)
    }
    deleteTour(id :string):Observable<TourResponse>{
      console.log(this.Base_Url+id)
      return this.http.delete<TourResponse>(this.Base_Url+id)
    }


    //
    
}
