import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProductDescription } from './product-description';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDescriptionService } from './product-description.service';
@Injectable({
    providedIn: 'root'
})
export class ProductDescriptionValueResolver implements Resolve<ProductDescription>{

    constructor(private productDescriptionService: ProductDescriptionService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ProductDescription | Observable<ProductDescription> | Promise<ProductDescription> {
        return this.productDescriptionService
                   .fetchProductDescriptionByUuid(route.params.productDescriptionUuid);
    }

}