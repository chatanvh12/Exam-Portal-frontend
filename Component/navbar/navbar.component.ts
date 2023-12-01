import { Component } from '@angular/core';
import { LoginService } from 'src/app/Srevices/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn = false;
  user = null;
  constructor(public logi: LoginService) { }
  ngOnInit(): void {
    this.isLoggedIn = this.logi.isLoggedIn();
    this.user = this.logi.getUser();
    this.logi.loginStatementSubject.asObservable().subscribe((user) => {
      this.isLoggedIn = this.logi.isLoggedIn();
      this.user = this.logi.getUser();
    });
  }

  public logout() {
    this.logi.logout();
    window.location.reload();
  }
}
