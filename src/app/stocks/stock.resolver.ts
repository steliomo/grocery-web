import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { StockService } from './stock.service';
import { Injectable } from '@angular/core';
import { StocksDTO } from './stocks-dto';

@Injectable({
    providedIn: 'root'
})
export class StockResolver implements Resolve<StocksDTO> {

    constructor(private stockService: StockService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): StocksDTO |Observable<StocksDTO> | Promise<StocksDTO> {
        return this.stockService.fetchAllStocks(0,8);
    }
}