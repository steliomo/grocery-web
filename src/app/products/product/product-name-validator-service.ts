import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime, switchMap, map, tap, first } from 'rxjs/operators';

import { ProductService } from './product-service';

@Injectable({providedIn: 'root'})
export class ProductNameValidatorService{

    constructor(private productService: ProductService){
    }
    
    validateProductName(){
        return (control: AbstractControl) => {
            return control
                    .valueChanges
                    .pipe(debounceTime(300))
                    .pipe(switchMap(
                        name => this.productService.findProductsByName(name)
                    ))
                    .pipe(map(value => value.length ? { usedName: true } : null))
                    .pipe(first());
        }
    }
}