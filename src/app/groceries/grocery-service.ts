import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment.prod';
import { GroceryDTO } from './grocery-dto';
import { GroceriesDTO } from './groceries-dto';
import { EnumsDTO } from '../core/dto/enums-dto';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  constructor(private http: HttpClient) { }

  createGrocery(GroceryDTO: GroceryDTO) {
    return this.http.post<GroceryDTO>(environment.API_URL + '/units', GroceryDTO);
  }

  findGroceries(currentPage: number, maxResult: number) {
    const params: HttpParams = new HttpParams().set('currentPage', currentPage.toString()).set('maxResult', maxResult.toString());
    return this.http.get<GroceriesDTO>(environment.API_URL + '/units', { params });
  }

  findUnitsByName(unitName: string) {
    const params: HttpParams = new HttpParams().set('unitName', unitName);
    return this.http.get<GroceriesDTO>(environment.API_URL + '/units/by-name', { params })
  }

  findAllUnitTypes() {
    return this.http.get<EnumsDTO>(environment.API_URL + '/units/unit-types');
  }

}
