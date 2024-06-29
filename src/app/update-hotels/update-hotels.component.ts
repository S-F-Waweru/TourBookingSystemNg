import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelsService } from '../Services/hotels.service';

@Component({
  selector: 'app-update-hotels',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './update-hotels.component.html',
  styleUrl: './update-hotels.component.css',
})
export class UpdateHotelsComponent implements OnInit {
  hotelId!: string
  form: FormGroup = new FormGroup({
    Name: new FormControl('', Validators.required),
    Location: new FormControl('', Validators.required),
    StarRating: new FormControl('', Validators.required),
  });
  constructor(
    private activateroute: ActivatedRoute,
    private hs: HotelsService,
    private route :Router
  ) { }
  ngOnInit(): void {
    this.activateroute.paramMap.subscribe((params) => {
      this.hotelId = params.get('id')!;
      console.log(this.hotelId);
      if (this.hotelId) {
        console.log(this.hotelId)
        //get hotel
        this.hs.getHotel(this.hotelId).subscribe(
          (hotel) => {
            console.log(hotel)
            const gottenhotel = hotel;
            console.log(gottenhotel);

            if (gottenhotel) {
              console.log(gottenhotel.Name)
              console.log(this.form.value)
              this.form.setValue({
                Name: gottenhotel.Name,
                Location: gottenhotel.Location,
                StarRating: gottenhotel.StarRating,
              });
            }
          },
          (err) => {
            console.log(err.error);
          });
      }
    }, err => {
      console.log(err.error)
    });
  }

  onSubmit() {
    this.hs.updateHotel(this.hotelId, this.form.value).subscribe(res => {
      console.log(res.message)
        this.route.navigate(['hotels', 'admin'])
    },err =>{
      console.log(err.error)
    })
  }
}
