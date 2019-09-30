import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { GroceryUserDTO } from './grocery-user-dto';
import { Observable } from 'rxjs';
import { UserService } from './user-service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GroceryUserResolver implements Resolve<GroceryUserDTO[]> {
    
    constructor(private userService: UserService) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): GroceryUserDTO[] | Observable<GroceryUserDTO[]> | Promise<GroceryUserDTO[]> {
        return this.userService.findAllGroceryUsers(0,8);
    }
}