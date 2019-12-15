import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { GroceryUserDTO } from './grocery-user-dto';
import { Observable } from 'rxjs';
import { UserService } from './user-service';
import { Injectable } from '@angular/core';
import { UsersDTO } from './users-dto';

@Injectable({
    providedIn: 'root'
})
export class GroceryUserResolver implements Resolve<UsersDTO> {
    
    constructor(private userService: UserService) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): UsersDTO | Observable<UsersDTO> | Promise<UsersDTO> {
        return this.userService.findAllGroceryUsers(0,8);
    }
}