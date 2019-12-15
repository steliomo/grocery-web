import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StockDTO } from './stock-dto';
import { StocksDTO } from './stocks-dto';

@Injectable({
    providedIn: 'root'
})
export class StockService {

    constructor(private http: HttpClient){}

    createStockProduct(stock: StockDTO){
        return this.http.post<StockDTO>(environment.API_URL+'/stocks', stock);
    }

    updateStock(stock: StockDTO){
        return this.http.put<StockDTO>(environment.API_URL +'/stocks', stock);
    }

    removeStock(stockUuid: string){
        return this.http.delete<StockDTO>(environment.API_URL + '/stocks/'+ stockUuid);
    }

    fetchAllStocks(currentPage: number, maxResult: number){
        const params: HttpParams =  new HttpParams().set('currentPage', currentPage.toString()).set('maxResult', maxResult.toString());
        return this.http.get<StocksDTO>(environment.API_URL+'/stocks', {params});
    }

    fetchStockByUuid(stockUuid: string){
        return this.http.get<StockDTO>(environment.API_URL +'/stocks/'+ stockUuid);
    }

    fetchByProductDescription(description: string){
        const params: HttpParams = new HttpParams().set('description', description);
        return this.http.get<StockDTO[]>(environment.API_URL + '/stocks/by-description', { params });
    }


}