import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-hotels',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './add-hotels.component.html',
  styleUrl: './add-hotels.component.css'
})
export class AddHotelsComponent implements OnInit{
  form! :FormGroup
  ngOnInit(): void {
    this.form = new FormGroup({
      hotelname : new FormControl(null, Validators.required),
      hotellocation : new FormControl(null, Validators.required),
      starrating : new FormControl(null, Validators.required),

    })
  }

  onSubmit(){

  }

}
