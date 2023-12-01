import { Component } from '@angular/core';
import { LoginService } from 'src/app/Srevices/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  
  constructor(protected login:LoginService){}

  

}
