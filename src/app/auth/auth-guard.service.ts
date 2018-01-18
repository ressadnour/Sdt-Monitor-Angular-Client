import { Injectable } from '@angular/core';


import { AuthService } from "./auth.service";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router,  private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot) {
                if (this.authService.isAuthenticated())
                  return true;
                  else 
                    {
                      this.router.navigate(['/login']);
                      return false;
                    }

    
  }
}

