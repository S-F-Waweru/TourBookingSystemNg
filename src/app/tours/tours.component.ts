import { Component, OnInit } from '@angular/core';
import { ToursService } from '../Services/tours.service';
import { CommonModule } from '@angular/common';
import { Tour } from '../Models/Tour';

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css'
})
export class ToursComponent  implements OnInit {
  constructor(private ts:ToursService){}
  tours! :Tour[]
  ngOnInit(): void {
    this.ts.getTours().subscribe(tours =>{
      console.log(tours)
      this.tours = tours
    })
  }

}
