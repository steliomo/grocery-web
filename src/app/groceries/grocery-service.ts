import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Grocery } from './grocery';
import { environment } from 'src/environments/environment.prod';
import { GroceryDTO } from './grocery-dto';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  constructor( private http: HttpClient) { }

  createGrocery(grocery: Grocery){
    return this.http.post<Grocery>(environment.API_URL+'/groceries', grocery);
  }

  findGroceries(currentPage: number, maxResult: number){
    const params: HttpParams = new HttpParams().set('currentPage', currentPage.toString()).set('maxResult', maxResult.toString());
    return this.http.get<GroceryDTO>(environment.API_URL+'/groceries', {params});
  }

}
