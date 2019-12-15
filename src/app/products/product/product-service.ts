import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProductDTO } from './product-dto';



@Injectable({providedIn: 'root'})
export class ProductService{

    constructor(private http:HttpClient){
    }
    
    findAllProducts(){
       return this.http.get<ProductDTO[]>(environment.API_URL +'/products');
    }

    createteProduct(product: ProductDTO){
       return this.http.post<ProductDTO>(environment.API_URL+'/products', product);
    }

    findProductsByName(name: string){
       return this.http.get<ProductDTO[]>(environment.API_URL+'/products/by-name/'+name);
    }

    findProductByUuid(uuid: string){
       return this.http.get<ProductDTO>(environment.API_URL+'/products/'+uuid);
    }

    updateProduct(product: ProductDTO){
       return this.http.put<ProductDTO>(environment.API_URL+'/products', product);
    }

    removeProduct(productUuid: string){
       return this.http.delete<ProductDTO>(environment.API_URL+'/products/'+productUuid);
    }
}