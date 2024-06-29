import { Component, OnInit } from '@angular/core';
import { ToursService } from '../Services/tours.service';
import { CommonModule } from '@angular/common';
import { Tour } from '../Models/Tour';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css'
})
export class ToursComponent  implements OnInit {
  constructor(private ts:ToursService,private router:Router){}
  tours! :Tour[]

  ngOnInit(): void {
    this.ts.getTours().subscribe(tours =>{
      console.log(tours)
      this.tours = tours
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
