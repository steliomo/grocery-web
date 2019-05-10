import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Stock } from './stock';
import { Injectable } from '@angular/core';
import { StockService } from './stock.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StockValueResolver implements Resolve<Stock>{
    
    constructor(private stockService: StockService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Stock | Observable<Stock> | Promise<Stock> {
        return this.stockService.fetchStockByUuid(route.params.stockUuid);
    }
}