import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Srevices/login.service';

@Component({
  selector: 'app-singnin',
  templateUrl: './singnin.component.html',
  styleUrls: ['./singnin.component.css']
})
export class SingninComponent {

  constructor(private snack: MatSnackBar, private login: LoginService,private router:Router) { }
  public userData = {
    password:"",
    username:""
  }
  FormSubmit() {
    if (this.userData.username.trim() == '' || this.userData.username.trim() == null) {
      this.snack.open("user name is required!!", '', {
        duration: 3000,
      });
      return;
    }
    if (this.userData.password.trim() == '' || this.userData.password.trim() == null) {
      this.snack.open("Password is required!!", '', {
        duration: 3000,
      });
      return;
    }
    //request to server to genetate token
    console.log(this.userData.password,this.userData.username);
    this.login.generateToken(this.userData).subscribe(
     
      (data:any)=>{
          console.log(data.token,"signin.component");
          this.login.loginUser(data.token)
          this.login.getCurrentUser().subscribe(
            (user:any): void=>{
              this.login.setUser(user);
              console.log(user,"signin service");
              //redirect ...admin:admin-dashboard
              //         ...normal:normal-dashboard
              console.log(this.login.getUserRole());
              if(this.login.getUserRole()=="Admin"){
                console.log("/admin");
               // window.location.href="/admin";
                this.router.navigate(['/admin']);
              }else if(this.login.getUserRole()=='NORMAL'){
               // window.location.href="/user-dashboard";
               console.log("redirecting to user dashboard");
                this.router.navigate(['user-dashboard/0']);
              }else{
                console.log("logout called from signin.component");
                this.login.logout();
              }
            },(error)=>{
              console.log("rooro in user")
            }
          );
      },(error)=>{
        console.log(error)
      }


    );
  }
}
