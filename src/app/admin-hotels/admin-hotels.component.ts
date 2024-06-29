import { Component, OnInit } from '@angular/core';
import { Hotel } from '../Models/Hotels';
import { HotelsService } from '../Services/hotels.service';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin-hotels',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-hotels.component.html',
  styleUrl: './admin-hotels.component.css'
})
export class AdminHotelsComponent implements OnInit {
  hotels! :Hotel[]
  constructor(private hs:HotelsService, private route:Router
  ){}
  ngOnInit(): void {
    this.hs.getHotels().subscribe(hotels => {this.hotels = hotels
    },
    err =>{
        console.log(err.error)
    }
  )
  }


  gethotelRating(starRating :number) {
    console.log(typeof starRating)
      return Array(starRating).fill(0).map((x, i) => i)
  }
  deleteHotel(id:string){
    console.log(id)
    this.hs.deleteHotel(id).subscribe(res =>{
      console.log(res.message)
    },err =>{
      console.log(err.error);
      
    })
  }

  updateHotel(id :string){
    this.route.navigate(['hotels', 'updatehotel', id]);
  }
}
