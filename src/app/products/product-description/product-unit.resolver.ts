import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductUnit } from '../product-unit/product-unit';
import { ProductUnitService } from '../product-unit/product-unit.service';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class ProductUnitResolver implements Resolve<Observable<ProductUnit[]>> {

    constructor(private productUnitService: ProductUnitService){
    }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
        Observable<ProductUnit[]> | Observable<Observable<ProductUnit[]>> | Promise<Observable<ProductUnit[]>> {
        return this.productUnitService.findAllProductUnits();
    }
}