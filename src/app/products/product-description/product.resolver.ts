import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProductService } from '../product/product-service';

@Injectable({providedIn: 'root'})
export class ProductResolver implements Resolve<Observable<Product[]>>{

    constructor(private productService: ProductService){
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<Product[]> | Observable<Observable<Product[]>> | Promise<Observable<Product[]>> {
            return this.productService.findAllProducts();
    }

}