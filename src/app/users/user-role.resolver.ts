import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user-service';

@Injectable({
    providedIn: 'root'
})
export class UserRoleResolver implements Resolve<Array<string>> {

    constructor(private userService: UserService){}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): string[] | Observable<string[]> | Promise<string[]> {
       return this.userService.findUserRoles();
    }
    
}