import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToursService } from '../Services/tours.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-tours',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './update-tours.component.html',
  styleUrl: './update-tours.component.css'
})
export class UpdateToursComponent implements OnInit {
  constructor( private activateroute: ActivatedRoute,
    private ts: ToursService,
    private route :Router){

  }
 tourId!:string
  form: FormGroup = new FormGroup({
    Name: new FormControl('', Validators.required),
    Destination: new FormControl('', Validators.required),
    Description: new FormControl('', Validators.required),
    Price: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe((params) => {
      this.tourId = params.get('id')!;
      console.log(this.tourId);
      if (this.tourId) {
        console.log(this.tourId)
        //get tour
        this.ts.getTour(this.tourId).subscribe(
          (tour) => {
            console.log(tour)
            const gottentour = tour;
            console.log(gottentour);

            if (gottentour) {
              console.log(gottentour.Name)
              console.log(this.form.value)
              this.form.setValue({
                Name: gottentour.Name,
                Destination: gottentour.Destination,
                Description: gottentour.Description,
                Price: gottentour.Price,
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
    this.ts.updateTour(this.tourId, this.form.value).subscribe(res => {
      console.log(res.message)
        this.route.navigate(['tours', 'admin'])
    },err =>{
      console.log(err.error)
    })
  }
}
