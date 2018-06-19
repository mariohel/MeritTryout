import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user/user.service';

@Injectable()
export class CanActivateAuthentication implements CanActivate {
  constructor(private router: Router, private service: UserService) {}

  /**Determine wether user is LogedIn and Activate Pages accordingly */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.service.isLogged) {
        if (state.url.indexOf('login') !== -1) {
          this.router.navigateByUrl('/account');
          return false;
        }
        return true;
      }

      if (state.url.indexOf('login') !== -1) {
        return true;
      }

      this.router.navigateByUrl('/login');
      return false;
  }
}
