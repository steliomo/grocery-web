import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment.prod';
import { GroceryDTO } from './grocery-dto';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  constructor( private http: HttpClient) { }

  createGrocery(GroceryDTO: GroceryDTO){
    return this.http.post<GroceryDTO>(environment.API_URL+'/groceries', GroceryDTO);
  }

  findGroceries(currentPage: number, maxResult: number){
    const params: HttpParams = new HttpParams().set('currentPage', currentPage.toString()).set('maxResult', maxResult.toString());
    return this.http.get<GroceryDTO>(environment.API_URL+'/groceries', {params});
  }

}
