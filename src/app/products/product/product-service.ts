import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

const API_URL = 'http://localhost:8082/services';

@Injectable({providedIn: 'root'})
export class ProductService{

    constructor(private http:HttpClient){
    }
    
    findAllProducts(){
       return this.http.get<Product[]>(API_URL +'/products');
    }
}