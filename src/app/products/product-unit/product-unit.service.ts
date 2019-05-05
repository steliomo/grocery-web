import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProductUnit } from './product-unit';


@Injectable({
  providedIn: 'root'
})
export class ProductUnitService {
  
  constructor(private http: HttpClient) { }

  getProductUnitTypes(){
    return this.http.get<string[]>(environment.API_URL+ '/product-units/types');
  }

  createProductUnit(productUnit: ProductUnit){
    return this.http.post<ProductUnit>(environment.API_URL+ '/product-units', productUnit);
  }

  findAllProductUnits(){
    return this.http.get<ProductUnit[]>(environment.API_URL+ '/product-units');
  }

  findProductUnitByUuid(uuid: string){
    return this.http.get<ProductUnit>(environment.API_URL+'/product-units/'+uuid);
  }

  updateProductUnit(productUnit: ProductUnit){
    return this.http.put<ProductUnit>(environment.API_URL+'/product-units', productUnit);
  }

  removeProductUnit(productUnitUuid: string){
    return this.http.delete<ProductUnit>(environment.API_URL+'/product-units/'+productUnitUuid);
  }

}
