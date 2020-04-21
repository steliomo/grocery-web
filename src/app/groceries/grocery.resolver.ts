import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GroceryDTO } from './grocery-dto';
import { GroceryService } from './grocery-service';


@Injectable({providedIn: 'root'})
export class GroceryResolver implements Resolve<GroceryDTO> {
    
    constructor(private groceryService: GroceryService){}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): GroceryDTO | Observable<GroceryDTO> | Promise<GroceryDTO> {
        return this.groceryService.findGroceries(0,8);
    }
}