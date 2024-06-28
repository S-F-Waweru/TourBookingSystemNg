import { Injectable } from '@angular/core';
import { Adduser, LoginReq, LoginResponse, RegisterResponse } from '../Models/AddUser';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private http:HttpClient) { }
  private readonly Base_URL = "http://localhost:3000/auth/"
  private readonly AdminURL = "http://localhost:3000/admin/"

  registerUser(newUser:Adduser): Observable<RegisterResponse>{
    console.log("we are here")
    console.log(this.Base_URL +'register')
      return this.http.post<RegisterResponse>(this.Base_URL +'register/', {newUser})
  }
  loginUser(user:LoginReq):Observable<LoginResponse>{
    console.log(user)
    console.log('Reaching here')
      return this.http.post<LoginResponse>(this.Base_URL+ 'login/', user)
  }
  getAllUsers(){
    return this.http.get(this.AdminURL)
  }
  changeUserToAdmin(id:string){
    return this.http.put(this.Base_URL+"change/"+id, {})
  }

  deleteUser
    (id:string){
      return this.http.put(this.Base_URL+"delete/"+id, {})
    }
  
}
