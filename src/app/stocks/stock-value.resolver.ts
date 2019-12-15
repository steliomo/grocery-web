import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { StockService } from './stock.service';
import { Observable } from 'rxjs';
import { StockDTO } from './stock-dto';

@Injectable({
    providedIn: 'root'
})
export class StockValueResolver implements Resolve<StockDTO>{
    
    constructor(private stockService: StockService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): StockDTO | Observable<StockDTO> | Promise<StockDTO> {
        return this.stockService.fetchStockByUuid(route.params.stockUuid);
    }
}