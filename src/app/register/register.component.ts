import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthServiceService } from '../Services/auth-service.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form!:FormGroup
  constructor(private as :AuthServiceService){}
  ngOnInit(): void {
    this.form = new FormGroup({
      Name : new FormControl(null,Validators.required),
      Email : new FormControl(null,[Validators.required, Validators.email]),
      Password : new FormControl(null,[Validators.required, this.passwordValidator.bind(true)])
    })
  }
  onSubmit(){
    console.log(this.form.value)
    console.log("reachinghere")
   this.as.registerUser(this.form.value).subscribe(res=>{
    console.log(res.message)
   },err =>{
    console.log(err.message)
   })
  }











  // :{[x:String]:Boolean}:null,control:FormControl
  passwordValidator(control:FormControl):{[x:string]:Boolean} | null{
    const value = control.value;
    if (value == undefined) {
      console.log('Value undefined')
      return  {passwordValidator :true} ; // Or handle this case as per your application's logic
    }
    let hasDigit = false;
    let hasLowerCase = false;
    let hasUpperCase = false;
    let hasSpecialChar = false;
  
    for (let i = 0; i < control.value.length; i++) {
      let charCode = control.value.charCodeAt(i);
  
      if (charCode >= 48 && charCode <= 57) {
        hasDigit = true;
      } else if (charCode >= 97 && charCode <= 122) {
        hasLowerCase = true;
      } else if (charCode >= 65 && charCode <= 90) {
        hasUpperCase = true;
      } else if (
        (charCode >= 33 && charCode <= 47) ||
        (charCode >= 58 && charCode <= 64) ||
        (charCode >= 91 && charCode <= 96) ||
        (charCode >= 123 && charCode <= 126)
      ) {
        hasSpecialChar = true;
      }// check patterns
    }

    if (hasDigit && hasLowerCase && hasUpperCase && hasSpecialChar){
      console.log('good control')
      return null
    }else{
      console.log('bad control')

      return {passwordValidator :true}
    }
  
  }
}
