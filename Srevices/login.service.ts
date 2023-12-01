import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatementSubject=new Subject<boolean>();

  constructor(private http:HttpClient) { }
  //Current user
  public getCurrentUser(){
    
    return this.http.get(`${baseUrl}/current-user`);
  }

  //generate token
  public generateToken(loginData:any){
    console.log(loginData);
   return this.http.post(`${baseUrl}/generate-token`,loginData);
  }
  //----------------------------------------------
  //login user set token in localStorage
  public loginUser(token:any){
    console.log("wdfds")
    console.log(token)
    
    localStorage.setItem("token1",token);
  
    this.loginStatementSubject.next(true);
    return true;
  }

  //isLogin
  public isLoggedIn(){
    let tokenStr=localStorage.getItem("token1");
    if(tokenStr==undefined || tokenStr==''||tokenStr==null){
      return false;
    }else{
      console.log("is logedin called *");
      return true;
    }
  }

  //logout: removing token from local storage
  public logout(){
    console.log("logout called");
    localStorage.removeItem('token1');
    localStorage.removeItem('user1');
    return true;
  }
  //get token
  public getToken(){
    const newLocal = localStorage.getItem('token1');
    return newLocal;
  }
  //set userDetails
  public setUser(user:any): void{
    localStorage.setItem("user1",JSON.stringify(user));
  }

  //get User
  public getUser(){
    let userStr=localStorage.getItem("user1");
    if(userStr!=null){
      return JSON.parse(userStr);
    }else{
      console.log("login.service getUser");
     
      return null;
    }
  }

  //get user role
  public getUserRole():string{
    let user=this.getUser();
    
    //if multiple user is ther then just right return user.authorities
    return user.authorities[0].authority;
      
    
  }
  public getStatus(x:any){
    if(x==true){
      return "Active";
    }
    return "Deactivated";
  }
}
