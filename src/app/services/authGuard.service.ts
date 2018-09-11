import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
 
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
 
  constructor(private auth : AuthenticationService, private router: Router) {}
 
  canActivate(): boolean {
    debugger
    let value = this.auth.isAuthenticated()
    if (!value) {
      this.router.navigateByUrl("/login")
    }
    return value
  }
}