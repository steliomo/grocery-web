import { Injectable } from '@angular/core';
import { ProductDTO } from '../product/product-dto';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProductService } from '../product/product-service';

@Injectable({providedIn: 'root'})
export class ProductResolver implements Resolve<Observable<ProductDTO[]>>{

    constructor(private productService: ProductService){
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<ProductDTO[]> | Observable<Observable<ProductDTO[]>> | Promise<Observable<ProductDTO[]>> {
            return this.productService.findAllProducts();
    }

}