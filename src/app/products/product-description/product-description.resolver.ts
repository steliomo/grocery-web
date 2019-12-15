import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductDescriptionDTO } from './product-description-dto';
import { Injectable } from '@angular/core';
import { ProductDescriptionService } from './product-description.service';
import { ProductDescriptionsDTO } from './product-descriptions-dto';

@Injectable({
    providedIn: 'root'
})
export class ProductDescriptionResolver implements Resolve<Observable<ProductDescriptionsDTO>> {

    constructor(private productDescriptionService: ProductDescriptionService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
            Observable<ProductDescriptionsDTO> | Observable<Observable<ProductDescriptionsDTO>> | Promise<Observable<ProductDescriptionsDTO>> {
                return this.productDescriptionService
                    .fetchdAllProductDescriptions(0, 8);
    }
}