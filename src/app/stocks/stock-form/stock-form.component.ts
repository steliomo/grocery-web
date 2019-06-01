import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDescription } from 'src/app/products/product-description/product-description';
import { ProductDescriptionDTO } from 'src/app/products/product-description/product-description-dto';
import { Subject } from 'rxjs';
import { ProductDescriptionService } from 'src/app/products/product-description/product-description.service';
import { Stock } from '../stock';
import { StockService } from '../stock.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  stockForm: FormGroup;
  productDescriptions: ProductDescription[] = [];
  productDescription: ProductDescription;
  stock: Stock;


  constructor(  private formBuilder: FormBuilder, 
                private route: ActivatedRoute, 
                private productDescriptionService: ProductDescriptionService, 
                private stockService: StockService, 
                private alertService: AlertService, 
                private router: Router
              ) { }

  ngOnInit() {
    this.productDescriptions = this.getProducts();
    const stock = this.route.snapshot.data.stock;

    this.stockForm = this.formBuilder.group({
      purchasePrice: ['', Validators.required],
      salePrice: ['', Validators.required],
      quantity: ['', Validators.required ]
    });

    if(stock){
      this.stock = stock;
      this.productDescription = this.stock.productDescription;
      this.productDescription.name = this.getProductName(this.productDescription);
      this.stockForm.patchValue(this.stock);
    }
  }

  private getProductName(productDescription: ProductDescription): string{
    return productDescription.product.name+' '+productDescription.description+' '+productDescription.productUnit.unit+''+productDescription.productUnit.productUnitType;
  }

  private getProducts(): ProductDescription[] {
    const productDescriptionDTO: ProductDescriptionDTO = this.route.snapshot.data.productDescriptionDTO;
    const productDescriptions: ProductDescription[] = productDescriptionDTO.productDescriptions;
    productDescriptions.forEach(productDescription => productDescription.name = this.getProductName(productDescription));
    
    return productDescriptions;
  }


  selectProduct(productDescription: ProductDescription){
    this.productDescription = productDescription;
  }

  searchProduct(query:string){
    if(query){
      this.productDescriptionService
          .fetchProductDescriptionByDescription(query)
          .subscribe(productDescriptions => {
            this.productDescriptions = productDescriptions;
            this.productDescriptions.forEach(productDescription => productDescription.name = this.getProductName(productDescription));
          });
    }else{
      this.productDescriptions = this.getProducts();
    }
  }

  saveStock(){
    if(this.stockForm.valid && !this.stockForm.pending){
      const stock = this.stockForm.getRawValue() as Stock;
      stock.productDescription = this.productDescription;
      this.stockService
          .createStockProduct(stock)
          .subscribe(stock => {
            this.alertService.success('O stock do produto "'+this.getProductName(stock.productDescription)+'" foi adicionado com sucesso!');
            this.router.navigate(['/stocks']);
          },
          error => {
            this.alertService.danger('Ocorreu um erro ao adicionar o stock do producto');
          });
    }
  }

  updateStock(){
    if(this.stockForm.valid && !this.stockForm.pending){
      const stock = this.stockForm.getRawValue() as Stock;

      this.stock.productDescription = this.productDescription;
      this.stock.purchasePrice = stock.purchasePrice;
      this.stock.salePrice = stock.salePrice;
      this.stock.quantity = stock.quantity;
      
      this.stockService
          .updateStock(this.stock)
          .subscribe(stock => {
            this.alertService.success('O stock do produto "'+this.getProductName(stock.productDescription)+'" foi actualizado com sucesso!');
            this.router.navigate(['/stocks']);
          },
          error => {
            this.alertService.danger('Ocorreu um erro ao actualizar o stock do producto');
          });
    }
  }
}
