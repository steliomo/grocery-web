import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { environment } from 'src/environments/environment';



@Injectable({providedIn: 'root'})
export class ProductService{

    constructor(private http:HttpClient){
    }
    
    findAllProducts(){
       return this.http.get<Product[]>(environment.API_URL +'/products');
    }

    createteProduct(product: Product){
       return this.http.post<Product>(environment.API_URL+'/products', product);
    }
}