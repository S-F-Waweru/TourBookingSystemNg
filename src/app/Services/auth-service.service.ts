import { Injectable } from '@angular/core';
import { Adduser, LoginReq, LoginResponse, RegisterResponse, User, UserReq } from '../Models/AddUser';
import { Observable, flatMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
   isLoggedIn= false

  constructor(private http:HttpClient) { }
  private readonly Base_URL = "http://localhost:3000/auth/"
  private readonly AdminURL = "http://localhost:3000/admin/"

  registerUser(newUser:Adduser): Observable<RegisterResponse>{
    console.log("we are here")
    console.log(this.Base_URL +'register')
      return this.http.post<RegisterResponse>(this.Base_URL +'register/', newUser)
  }
  loginUser(user:LoginReq):Observable<LoginResponse>{
    console.log(user)
    console.log('Reaching here')
      return this.http.post<LoginResponse>(this.Base_URL+ 'login/', user)
  }
  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.AdminURL)
  }
  changeUserToAdmin(id:string):Observable<UserReq>{
    return this.http.put<UserReq>(this.Base_URL+"change/"+id, {})
  }

  deleteUser
    (id:string):Observable<UserReq>{
      return this.http.put<UserReq>(this.Base_URL+"delete/"+id, {})
    }
  // token

  logout(){
    localStorage.clear()
    this.isLoggedIn= false
  }
  login(){
    this.isLoggedIn = true
  }
  showStatus(){
    const token = localStorage.getItem('token') as string
    if (token){
      return true
    }else{
      return false
    }
  }





}
