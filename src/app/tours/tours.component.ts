import { Component, OnInit } from '@angular/core';
import { ToursService } from '../Services/tours.service';
import { CommonModule } from '@angular/common';
import { Tour } from '../Models/Tour';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../State';
import { ToursAction } from '../State/Actions/tours.actions';
import { toursArraySelector } from '../State/Selector/tour.selector';

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css'
})
export class ToursComponent  implements OnInit {
  constructor(
    private store:Store<AppState>,
    private ts :ToursService,
    private router:Router){}
  tours! :Tour[]
  

  ngOnInit(): void {
   this.store.dispatch(ToursAction.getTour())
   this.store.select(toursArraySelector).subscribe(res =>{
    this.tours = res
   })
  }

  addBooking(id :string){
    console.log(id)
    this.router.navigate(['bookings', 'addBooking', id]);
    this.ts.getTour(id).subscribe(tour =>{
      console.log(tour)
     

    },err =>{
      console.log(err.error)
    })

  }

}
