import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertService } from '../shared/components/alert/alert.service';

@Component({
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit, OnDestroy {
  
  constructor( private alertService: AlertService ) { }
  
  ngOnInit() {
  }
  
  ngOnDestroy(): void {
    // this.alertService.destroy();
  }

}
