import { Component, OnInit } from '@angular/core';

import { ProductDescription } from 'src/app/products/product-description/product-description';
import { Stock } from '../stock';
import { StockService } from '../stock.service';
import { ActivatedRoute } from '@angular/router';
import { StockDTO } from '../stock-dto';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { query } from '@angular/core/src/render3';
import { ConfirmationDialogService } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';

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

  constructor(private stockService: StockService, private route: ActivatedRoute, private confirmationDialogService: ConfirmationDialogService, private alertService: AlertService) { }

  ngOnInit() {
    const stockDTO: StockDTO = this.route.snapshot.data.stockDTO;
    this.stocks = stockDTO.stocks;
    this.totalItems = stockDTO.totalItems;

    this.query
        .pipe(debounceTime(500))
        .subscribe(query => {
          
          query = query.trim();

          if(query){
            this.stockService
                .fetchByProductDescription(query)
                .subscribe(stocks => {
                  this.stocks = stocks;
                  this.totalItems = stocks.length;
                });
          }else{
            this.stocks = stockDTO.stocks;
            this.totalItems = stockDTO.totalItems;
          }
        });
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

  selectedStock(stock: Stock){
    this.confirmationDialogService.setDialog('Tem a certeza de que pretende remover o stock do produto "'+this.getProductName(stock.productDescription)+'"', stock);
  }

  removeStock(stock: Stock){
    this.stockService
        .removeStock(stock.uuid)
        .subscribe(stock => {
          this.alertService.success('O producto do com o stock "'+ this.getProductName(stock.productDescription)+ '" foi removido com sucesso!');
          this.stockService
              .fetchAllStocks(this.eventValue.currentPage - 1, this.eventValue.pageSize)
              .subscribe(stockDTO => {
                this.stocks = stockDTO.stocks;
                this.totalItems = stockDTO.totalItems;
              });
        },
        error => {
          this.alertService.danger('Ocorreu um erro ao remover o stock do producto!');
          console.log(error);
        });
  }

}
