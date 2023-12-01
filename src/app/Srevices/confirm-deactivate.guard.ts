import { CanDeactivateFn } from '@angular/router';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

export interface confirmComponentDeactivate {
  canDeactivate: () => boolean | Observable<boolean>;
}

export const confirmDeactivateGuard: CanDeactivateFn<confirmComponentDeactivate> = (
  component: confirmComponentDeactivate,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState?: RouterStateSnapshot
) => {
  return component.canDeactivate ? component.canDeactivate() : true;
};
