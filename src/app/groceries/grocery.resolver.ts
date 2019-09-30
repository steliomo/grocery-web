import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { GroceryDTO } from './grocery-dto';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { GroceryService } from './grocery-service';

@Injectable({providedIn: 'root'})
export class GroceryResolver implements Resolve<GroceryDTO> {
    
    constructor(private groceryService: GroceryService){}
    
    resolve(route: ActivatedRouteSnapshot, RouterStateSnapshot): GroceryDTO | Observable<GroceryDTO> | Promise<GroceryDTO> {
        return this.groceryService.findGroceries(0,8);
    }
}