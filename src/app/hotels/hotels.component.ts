import { Component, OnInit } from '@angular/core';
import { Hotel } from '../Models/Hotels';
import { HotelsService } from '../Services/hotels.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [CommonModule,
  ],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})
export class HotelsComponent implements OnInit {
  hotels!: Hotel[]
  constructor(private hs: HotelsService) { }
  ngOnInit(): void {
   this.hs.getHotels().subscribe(hotels =>{
    this.hotels = hotels
   })
  }

  gethotelRating(starRating :number) {
    console.log(typeof starRating)
      return Array(starRating).fill(0).map((x, i) => i)
  }

}
