import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormRecord, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToursService } from '../Services/tours.service';
import {TourReq } from '../Models/Tour';

@Component({
  selector: 'app-add-tours',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-tours.component.html',
  styleUrl: './add-tours.component.css'
})
export class AddToursComponent implements OnInit {
  constructor(private ts:ToursService){}
  form! :FormGroup
  ngOnInit(): void {
    this.form = new FormGroup({
      Name : new FormControl(null, Validators.required),
      Destination : new FormControl(null, Validators.required),
      Description : new FormControl(null, Validators.required),
      Price : new FormControl(null, [Validators.required]),
    })
  }

  onSubmit(){
    console.log(this.form.value)
    const newTour: TourReq = this.form.value
    this.ts.addTour(newTour).subscribe(res =>{
      console.log("Tour Added")

    }, err =>{
      console.log(err.error);
    })
    

  }


}
function log(message: string) {
  throw new Error('Function not implemented.');
}

