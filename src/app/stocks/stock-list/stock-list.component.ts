import { Component, OnInit } from '@angular/core';
import { query } from '@angular/core/src/render3';
import { debounceTime } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

import { StockService } from '../stock.service';
import { ConfirmationDialogService } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { StocksDTO } from '../stocks-dto';
import { StockDTO } from '../stock-dto';
import { ProductDescriptionDTO } from 'src/app/products/product-description/product-description-dto';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  stocks: StockDTO[] = [];
  totalItems: number = 0;
  query: Subject<string> = new Subject();
  eventValue: any;

  constructor(private stockService: StockService, private route: ActivatedRoute, private confirmationDialogService: ConfirmationDialogService, private alertService: AlertService) { }

  ngOnInit() {
    const stocksDTO: StocksDTO = this.route.snapshot.data.stockDTO;
    this.stocks = stocksDTO.stocksDTO;
    this.totalItems = stocksDTO.totalItems;

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
            this.stocks = stocksDTO.stocksDTO;
            this.totalItems = stocksDTO.totalItems;
          }
        });
  }

  updateDate(eventValue: any){
    console.log(eventValue);
    this.eventValue = eventValue;
    this.stockService
        .fetchAllStocks(this.eventValue.currentPage - 1, this.eventValue.pageSize)
        .subscribe(stocksDTO => {
          this.stocks = stocksDTO.stocksDTO;
          this.totalItems = stocksDTO.totalItems;
        })
  }

  selectedStock(stock: StockDTO){
    this.confirmationDialogService.setDialog('Tem a certeza de que pretende remover o stock do produto "'+stock.productDescriptionDTO.name+'"', stock);
  }

  removeStock(stock: StockDTO){
    this.stockService
        .removeStock(stock.uuid)
        .subscribe(stock => {
          this.alertService.success('O producto do com o stock "'+ stock.productDescriptionDTO.name+'" foi removido com sucesso!');
          this.stockService
              .fetchAllStocks(this.eventValue.currentPage - 1, this.eventValue.pageSize)
              .subscribe(stockDTO => {
                this.stocks = stockDTO.stocksDTO;
                this.totalItems = stockDTO.totalItems;
              });
        },
        error => {
          this.alertService.danger('Ocorreu um erro ao remover o stock do producto!');
          console.log(error);
        });
  }

}
