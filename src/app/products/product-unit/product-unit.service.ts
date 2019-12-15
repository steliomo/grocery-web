import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProductUnitDTO } from './product-unit-dto';


@Injectable({
  providedIn: 'root'
})
export class ProductUnitService {
  
  constructor(private http: HttpClient) { }

  getProductUnitTypes(){
    return this.http.get<string[]>(environment.API_URL+ '/product-units/types');
  }

  createProductUnit(productUnit: ProductUnitDTO){
    return this.http.post<ProductUnitDTO>(environment.API_URL+ '/product-units', productUnit);
  }

  findAllProductUnits(){
    return this.http.get<ProductUnitDTO[]>(environment.API_URL+ '/product-units');
  }

  findProductUnitByUuid(uuid: string){
    return this.http.get<ProductUnitDTO>(environment.API_URL+'/product-units/'+uuid);
  }

  updateProductUnit(productUnit: ProductUnitDTO){
    return this.http.put<ProductUnitDTO>(environment.API_URL+'/product-units', productUnit);
  }

  removeProductUnit(productUnitUuid: string){
    return this.http.delete<ProductUnitDTO>(environment.API_URL+'/product-units/'+productUnitUuid);
  }

}
