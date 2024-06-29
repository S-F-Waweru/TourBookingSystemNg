import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HotelsService } from '../Services/hotels.service';

@Component({
  selector: 'app-add-hotels',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './add-hotels.component.html',
  styleUrl: './add-hotels.component.css'
})
export class AddHotelsComponent implements OnInit{
  constructor(private hs:HotelsService){}
  form! :FormGroup
  ngOnInit(): void {
    this.form = new FormGroup({
      Name : new FormControl(null, Validators.required),
      Location : new FormControl(null, Validators.required),
      StarRating : new FormControl(null, Validators.required),

    })
  }

  onSubmit(){

    console.log(this.form.value)
    this.hs.addHotel(this.form.value).subscribe(res =>{
        console.log(res.message)
        this.form.reset()

    }, err =>{
        console.log(err.error)
    })
  }

}
