import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Srevices/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private userService:UserService,private _snack:MatSnackBar){}
//[] to bind from source to view
//() to bind from view to source
  public user={
    username:'',
    firstName:'',
    lastNamen:'',
    password:'',
    email:'',
    phone:''
  }
  formSubmit(){
    if(this.user.email==null ||this.user.email==" "){
      //alert('all information is required')
      this._snack.open("required",'OK',{
        duration:2000,
        horizontalPosition:'right',
        verticalPosition:'top',
        politeness:'polite',
        panelClass:'color:red'
      });
      return;
    }
    //addUser: userservice
    this.userService.addUser(this.user).subscribe(
      (data)=>{
        //success
        console.log(data);
        Swal.fire('Success','User is Successfully Registered','success');
      },
      (error)=>{
        //error
        console.log(error);
        Swal.fire('error','Please Choose Another User name This one is already exist','error');
      }
      )
  }
}
