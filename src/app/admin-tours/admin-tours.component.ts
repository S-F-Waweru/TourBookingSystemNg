import { Component, OnInit } from '@angular/core';
import { ToursService } from '../Services/tours.service';
import { Tour } from '../Models/Tour';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-tours',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-tours.component.html',
  styleUrl: './admin-tours.component.css'
})
export class AdminToursComponent implements OnInit {
  tours!:Tour[]
  constructor(private ts:ToursService,
    private route : Router
  ){}
  
  ngOnInit(): void {
    this.ts.getTours().subscribe(tours =>{
      this.tours = tours
    })
  }
  deleteTour(tourID:string){
    console.log(tourID)
    this.ts.deleteTour(tourID).subscribe(res=>{
      console.log(res.message)
    })
  }

  updateTour(tourID:string){
    // going to tours
    this.route.navigate(['tours', 'updatetour', tourID]);
  }





}
