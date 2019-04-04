import { Injectable } from '@angular/core';
import { Product } from '../product';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProductService } from '../product-service';

@Injectable({providedIn: 'root'})
export class ProductFormResolver implements Resolve<Observable<Product[]>>{

    constructor(private productService: ProductService){
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<Product[]> | Observable<Observable<Product[]>> | Promise<Observable<Product[]>> {
            return this.productService.findAllProducts();
    }

}