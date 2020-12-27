import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService) { }

  canActivate() {
    if  ( this.authService.isLoggedIn() ) {
      return true;
    }
    else{
      this.router.navigate(['/']);
      return false;
    }
  }

}

/*import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,
Router } from '@angular/router';

@Injectable({
providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(private router: Router) { }
canActivate(
next: ActivatedRouteSnapshot,
state: RouterStateSnapshot): boolean {
if (Boolean(sessionStorage.getItem('isConnected'))) {
return true;
} else {
this.router.navigateByUrl('/auth');
return false;
}
}
}
*/