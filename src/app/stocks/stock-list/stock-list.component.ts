import { Component, OnInit } from '@angular/core';

import { ProductDescription } from 'src/app/products/product-description/product-description';
import { Stock } from '../stock';
import { StockService } from '../stock.service';
import { ActivatedRoute } from '@angular/router';
import { StockDTO } from '../stock-dto';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  stocks: Stock[] = [];
  totalItems: number = 0;
  query: Subject<string> = new Subject();
  eventValue: any;

  constructor(private stockService: StockService, private route: ActivatedRoute) { }

  ngOnInit() {
    const stockDTO: StockDTO = this.route.snapshot.data.stockDTO;
    this.stocks = stockDTO.stocks;
    this.totalItems = stockDTO.totalItems;
  }

  getProductName(productDescription: ProductDescription): string{
    return productDescription.product.name+' '+productDescription.description+' '+productDescription.productUnit.unit+''+productDescription.productUnit.productUnitType;
  }

  updateDate(eventValue: any){
    console.log(eventValue);
    this.eventValue = eventValue;
    this.stockService
        .fetchAllStocks(this.eventValue.currentPage - 1, this.eventValue.pageSize)
        .subscribe(stockDTO => {
          this.stocks = stockDTO.stocks;
          this.totalItems = stockDTO.totalItems;
        })
  }

}
