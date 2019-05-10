import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Stock } from './stock';
import { environment } from 'src/environments/environment';
import { StockDTO } from './stock-dto';

@Injectable({
    providedIn: 'root'
})
export class StockService {

    constructor(private http: HttpClient){}

    createStockProduct(stock: Stock){
        return this.http.post<Stock>(environment.API_URL+'/stocks', stock);
    }

    updateStock(stock: Stock){
        return this.http.put<Stock>(environment.API_URL +'/stocks', stock);
    }

    removeStock(stockUuid: string){
        return this.http.delete<Stock>(environment.API_URL + '/stocks/'+ stockUuid);
    }

    fetchAllStocks(currentPage: number, maxResult: number){
        const params: HttpParams =  new HttpParams().set('currentPage', currentPage.toString()).set('maxResult', maxResult.toString());
        return this.http.get<StockDTO>(environment.API_URL+'/stocks', {params});
    }

    fetchStockByUuid(stockUuid: string){
        return this.http.get<Stock>(environment.API_URL +'/stocks/'+ stockUuid);
    }

    fetchByProductDescription(description: string){
        const params: HttpParams = new HttpParams().set('description', description);
        return this.http.get<Stock[]>(environment.API_URL + '/stocks/by-description', { params });
    }


}