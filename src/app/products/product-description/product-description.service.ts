import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { ProductDescriptionDTO } from './product-description-dto';
import { ProductDescriptionsDTO } from './product-descriptions-dto';

@Injectable({
    providedIn: 'root'
})
export class ProductDescriptionService {

    constructor(private http: HttpClient){}

    createProductDescription(productDescription: ProductDescriptionDTO){
        return this.http.post<ProductDescriptionDTO>(environment.API_URL+'/product-descriptions', productDescription);
    }

    fetchdAllProductDescriptions(currentPage: number, maxResult: number){
        const params  = new HttpParams().set('currentPage', currentPage.toString()).set('maxResult', maxResult.toString());
        return this.http.get<ProductDescriptionsDTO>(environment.API_URL+'/product-descriptions', {params});
    }

    fetchProductDescriptionByDescription(description: string){
        const params = new HttpParams().set('description', description);
        return this.http.get<ProductDescriptionDTO[]>(environment.API_URL+'/product-descriptions/by-description', { params });
    }

    fetchProductDescriptionByUuid(productDescriptionUuid: string){
        return this.http.get<ProductDescriptionDTO>(environment.API_URL +'/product-descriptions/'+ productDescriptionUuid);
    }

    upadateProductDescription(productDescription: ProductDescriptionDTO){
        return this.http.put<ProductDescriptionDTO>(environment.API_URL+'/product-descriptions', productDescription);
    }

    removeProductDescription(productDescriptionUuid: string){
        return this.http.delete<ProductDescriptionDTO>(environment.API_URL+'/product-descriptions/'+productDescriptionUuid);
    }
}