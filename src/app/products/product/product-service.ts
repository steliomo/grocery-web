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

    findProductsByName(name: string){
       return this.http.get<Product[]>(environment.API_URL+'/products/by-name/'+name);
    }

    findProductByUuid(uuid: string){
       return this.http.get<Product>(environment.API_URL+'/products/'+uuid);
    }

    updateProduct(product: Product){
       return this.http.put<Product>(environment.API_URL+'/products', product);
    }

    removeProduct(productUuid: string){
       return this.http.delete<Product>(environment.API_URL+'/products/'+productUuid);
    }
}