import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthServiceService } from '../Services/auth-service.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../State';
import { AuthActions } from '../State/Actions/Auth.actions';
import { erorrLoginSelector } from '../State/Selector/auth.selector';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private store: Store<AppState>, private router: Router) { }

  form!: FormGroup
  userRole!: string
  ngOnInit(): void {
    this.userRole = 'customer'
    this.form = new FormGroup({
      Email: new FormControl(null, Validators.required),
      Password: new FormControl(null, [Validators.required, this.passwordValidator.bind(this)])
    })
  }
  error$ = this.store.select(erorrLoginSelector)

  onSubmit() {
    console.log(this.form)
    const token = localStorage.getItem('token')
    if (!token) {

      this.store.dispatch(AuthActions.login({ user: this.form.value }))


    } else {
      this.router.navigate([''])
    }


  }


  passwordValidator(control: FormControl): { [x: string]: Boolean } | null {
    const value = control.value;
    if (value == undefined) {
      console.log('Value undefined')
      return { passwordValidator: true }; // Or handle this case as per your application's logic
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

    if (hasDigit && hasLowerCase && hasUpperCase && hasSpecialChar) {
      console.log('good control')
      return null
    } else {
      console.log('bad control')

      return { passwordValidator: true }
    }

  }
}
