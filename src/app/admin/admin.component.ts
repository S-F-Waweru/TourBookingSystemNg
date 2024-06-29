import { Component, OnInit } from '@angular/core';
import { User } from '../Models/AddUser';
import { AuthServiceService } from '../Services/auth-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{
  constructor(private as:AuthServiceService) {}
  users! :User[]
  ngOnInit(): void {
    this.as.getAllUsers().subscribe(users =>{
        this.users = users
        console.log(this.users)
    })

  
    
  }

  deleteUser(userID:string){
    this.as.deleteUser(userID).subscribe(res =>{
      console.log(res.message)
    })
      
  }
}
