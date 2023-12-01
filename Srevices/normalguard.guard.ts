import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';

export const normalGuard: CanActivateFn = (route, state) => {
  const login=inject(LoginService);
  const rout=inject(Router);
  if(login.isLoggedIn() && login.getUserRole()=='NORMAL'){
    console.log("auth guard cleared");
    return true;
  }
  rout.navigate(['login']);
  return false;
};
