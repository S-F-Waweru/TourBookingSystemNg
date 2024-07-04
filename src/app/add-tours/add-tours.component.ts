import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormRecord, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToursService } from '../Services/tours.service';
import {TourReq } from '../Models/Tour';
import { Store } from '@ngrx/store';
import { AppState } from '../State';
import { ToursAction } from '../State/Actions/tours.actions';
import { errorMessageselector, successMessageselector } from '../State/Selector/tour.selector';

@Component({
  selector: 'app-add-tours',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-tours.component.html',
  styleUrl: './add-tours.component.css'
})
export class AddToursComponent implements OnInit {
  constructor(private ts:ToursService,
    private store:Store<AppState>
  ){}
  form! :FormGroup
  ngOnInit(): void {
    this.form = new FormGroup({
      Name : new FormControl(null, Validators.required),
      Destination : new FormControl(null, Validators.required),
      Description : new FormControl(null, Validators.required),
      Price : new FormControl(null, [Validators.required]),
    })
  }
  successMessage$ = this.store.select(successMessageselector)
  errorMessage$ = this.store.select(errorMessageselector)

  onSubmit(){
    console.log(this.form.value)
    const newTour: TourReq = this.form.value
    // this.ts.addTour(newTour).subscribe(res =>{
    //   console.log("Tour Added")

    // }, err =>{
    //   console.log(err.error);
    // })
    console.log('reaching here');
    
    this.store.dispatch(ToursAction.addTour({tour :newTour}))

    this.form.reset()
     
    console.log('Dispatched');
  }


}


