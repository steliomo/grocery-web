import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenServie } from './token.service';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {
   
   
    constructor(private tokenService: TokenServie, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        if(this.tokenService.hasToken()){
            this.router.navigate(['home']);
            return false;
        }

        return true;
    }

}