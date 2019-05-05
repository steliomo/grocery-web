import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductDescriptionDTO } from './product-description-dto';
import { Injectable } from '@angular/core';
import { ProductDescriptionService } from './product-description.service';

@Injectable({
    providedIn: 'root'
})
export class ProductDescriptionResolver implements Resolve<Observable<ProductDescriptionDTO>> {

    constructor(private productDescriptionService: ProductDescriptionService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
            Observable<ProductDescriptionDTO> | Observable<Observable<ProductDescriptionDTO>> | Promise<Observable<ProductDescriptionDTO>> {
                return this.productDescriptionService
                    .fetchdAllProductDescriptions(0, 8);
    }
}