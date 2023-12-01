import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(
    private http:HttpClient
  ) { }
  //add user
  public addUser(user:any){
    console.log("User service is called",user);
   return this.http.post(`${baseUrl}/user/`,user);
  }
  public getUser(username:any){
    return this.http.get(`${baseUrl}/userr/${username}`)
  }
}
