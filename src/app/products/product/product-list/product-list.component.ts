import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../product';
import { AlertService } from 'src/app/shared/components/alert/alert.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  pages: number[];
  currentPage: number;
  pageSize: number;

  constructor(private alertService: AlertService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.products = this.activeRoute.snapshot.data.products;
    this.pages = [1,2,3,4,5,6];
    this.currentPage = 1;
    this.pageSize = 8;
  }

  setPage(pageNumber: number){
    this.currentPage = pageNumber;
    this.products = this.products.slice(pageNumber - 1, this.pageSize);
  }

}
