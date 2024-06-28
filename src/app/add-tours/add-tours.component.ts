import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormRecord, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-tours',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-tours.component.html',
  styleUrl: './add-tours.component.css'
})
export class AddToursComponent implements OnInit {
  form! :FormGroup
  ngOnInit(): void {
    this.form = new FormGroup({
      tourname : new FormControl(null, Validators.required),
      tourdestination : new FormControl(null, Validators.required),
      tourdescription : new FormControl(null, Validators.required),
      tourprice : new FormControl(null, [Validators.required]),
    })
  }

  onSubmit(){

  }


}
