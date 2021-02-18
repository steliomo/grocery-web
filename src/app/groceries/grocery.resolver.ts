import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GroceriesDTO } from './groceries-dto';
import { GroceryDTO } from './grocery-dto';
import { GroceryService } from './grocery-service';


@Injectable({ providedIn: 'root' })
export class GroceryResolver implements Resolve<Observable<GroceriesDTO>> {

    constructor(private groceryService: GroceryService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GroceriesDTO> | Observable<Observable<GroceriesDTO>> | Promise<Observable<GroceriesDTO>> {
        return this.groceryService.findGroceries(0, 8);
    }
}