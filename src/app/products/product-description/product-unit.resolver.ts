import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductUnitDTO } from '../product-unit/product-unit-dto';
import { ProductUnitService } from '../product-unit/product-unit.service';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class ProductUnitResolver implements Resolve<Observable<ProductUnitDTO[]>> {

    constructor(private productUnitService: ProductUnitService){
    }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
        Observable<ProductUnitDTO[]> | Observable<Observable<ProductUnitDTO[]>> | Promise<Observable<ProductUnitDTO[]>> {
        return this.productUnitService.findAllProductUnits();
    }
}