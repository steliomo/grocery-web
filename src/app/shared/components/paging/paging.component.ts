import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'go-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {

  readonly MIN_PAGING: number = 1;
  readonly MAX_PAGING: number = 5; 
  readonly ADD_PAGING: number = 2;
  readonly REDUCE_PAGES: number = 4;
  readonly PAGE_THREE: number = 3;

  @Input()totalItems: number;

  @Input()pageSize: number = 8;

  @Output() pageDataEvent:EventEmitter<Object> = new EventEmitter(); 

  totalPages: number;
 
  pages: number[];
  
  currentPage: number = 1;

  constructor() { }

  ngOnInit() {
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    this.pages = this.getPages(this.currentPage);
  }

  setPage(pageNumber: number){

    if(pageNumber < this.MIN_PAGING){
      this.currentPage = this.MIN_PAGING;
    }else if( pageNumber >= this.totalPages){
      this.currentPage = this.totalPages;
    } else{
      this.currentPage = pageNumber;
    }
    
    this.pages = this.getPages(pageNumber);

    this.pageDataEvent.emit(
      {
        startPage: (this.currentPage - this.MIN_PAGING) * this.pageSize,
        endPage: this.currentPage * this.pageSize
      }
    );
    
  }

  getPages(pageNumber: number){

    let startPage: number = this.MIN_PAGING;
    let endPage: number = this.MAX_PAGING;

    if(this.totalPages < this.MAX_PAGING){
      endPage = this.totalPages;
      return Array.from(Array((endPage + this.MIN_PAGING) - startPage ).keys()).map( page => startPage + page);
    }

    if(pageNumber <= this.PAGE_THREE){
      startPage = this.MIN_PAGING;
      endPage = this.MAX_PAGING;
    }else{

      if(pageNumber + this.MIN_PAGING >= this.totalPages){
        startPage = this.totalPages - this.REDUCE_PAGES;
        endPage = this.totalPages;
      }else{
        startPage = pageNumber - this.ADD_PAGING;
        endPage = pageNumber + this.ADD_PAGING;
      }
    }

    return  Array.from(Array((endPage + this.MIN_PAGING) - startPage ).keys()).map( page => startPage + page);
  }

}
