import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDescriptionService } from './product-description.service';
import { ProductDescriptionDTO } from './product-description-dto';
@Injectable({
    providedIn: 'root'
})
export class ProductDescriptionValueResolver implements Resolve<ProductDescriptionDTO>{

    constructor(private productDescriptionService: ProductDescriptionService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ProductDescriptionDTO | Observable<ProductDescriptionDTO> | Promise<ProductDescriptionDTO> {
        return this.productDescriptionService
                   .fetchProductDescriptionByUuid(route.params.productDescriptionUuid);
    }

}