import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';
import {inject } from'@angular/core';
export const adminGuard: CanActivateFn = (route, state) => {
 //Get the login service insteance using inject
  const login=inject(LoginService);
  const rout=inject(Router);
  if(login.isLoggedIn() && login.getUserRole()=='Admin'){
    console.log("auth guard cleared");
    return true;
  }
  rout.navigate(['login']);
  return false;
};
