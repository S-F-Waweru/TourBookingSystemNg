import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthServiceService } from '../Services/auth-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private as: AuthServiceService) { }

  userRole = localStorage.getItem('role')
  logout() {
    console.log('Log Out');
    localStorage.clear()
    this.as.logout()
  }



  ifLoggedIn() {
    if (this.as.showStatus() === true) {
      return true
    } else {
      return false
    }
  }


  ifAdmin() {
    // console.log(this.userRole);
    // console.log(this.userRole)
    
    if (this.userRole === 'admin') {
      return true
    } else {
      return false
    }
  }
}
