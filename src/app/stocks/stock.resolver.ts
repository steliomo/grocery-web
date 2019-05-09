import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { StockDTO } from './stock-dto';
import { StockService } from './stock.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StockResolver implements Resolve<StockDTO> {

    constructor(private stockService: StockService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): StockDTO |Observable<StockDTO> | Promise<StockDTO> {
        return this.stockService.fetchAllStocks(0,8);
    }
}