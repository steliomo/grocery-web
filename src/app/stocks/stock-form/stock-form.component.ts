import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductDescriptionDTO } from 'src/app/products/product-description/product-description-dto';
import { ProductDescriptionService } from 'src/app/products/product-description/product-description.service';
import { StockService } from '../stock.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { TokenServie } from 'src/app/core/auth/token.service';
import { StockDTO } from '../stock-dto';
import { ProductDescriptionsDTO } from 'src/app/products/product-description/product-descriptions-dto';
import { GroceryDTO } from 'src/app/groceries/grocery-dto';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  stockForm: FormGroup;
  productDescriptions: ProductDescriptionDTO[] = [];
  productDescription: ProductDescriptionDTO;
  stock: StockDTO;
  groceries: GroceryDTO[] = [];
  grocery: GroceryDTO;

  constructor(  private formBuilder: FormBuilder, 
                private route: ActivatedRoute, 
                private productDescriptionService: ProductDescriptionService, 
                private stockService: StockService, 
                private alertService: AlertService, 
                private router: Router,
                private tokenService: TokenServie
              ) { }

  ngOnInit() {
    this.productDescriptions = this.getProducts();
    const stock = this.route.snapshot.data.stock;
    const groceryDTO = this.route.snapshot.data.groceryDTO;

    if(groceryDTO){
      this.groceries = groceryDTO.groceriesDTO;
    }

    console.log(stock);

    this.stockForm = this.formBuilder.group({
      purchasePrice: ['', Validators.required],
      salePrice: ['', Validators.required],
      quantity: ['', Validators.required ]
    });

    if(stock){
      this.stock = stock;
      this.grocery = stock.groceryDTO;
      this.productDescription = this.stock.productDescriptionDTO;
      this.stockForm.patchValue(this.stock);
    }
  }

  private getProducts(): ProductDescriptionDTO[] {
    const productDescriptionsDTO: ProductDescriptionsDTO = this.route.snapshot.data.productDescriptionDTO;
    const productDescriptions: ProductDescriptionDTO[] = productDescriptionsDTO.productDescriptionsDTO;
    
    return productDescriptions;
  }


  selectProduct(productDescription: ProductDescriptionDTO){
    this.productDescription = productDescription;
  }

  searchProduct(query:string){
    if(query){
      this.productDescriptionService
          .fetchProductDescriptionByDescription(query)
          .subscribe(productDescriptions => {
            this.productDescriptions = productDescriptions;
          });
    }else{
      this.productDescriptions = this.getProducts();
    }
  }

  saveStock(){
    if(this.stockForm.valid && !this.stockForm.pending){
      const stock = this.stockForm.getRawValue() as StockDTO;
      stock.groceryDTO = this.grocery;
      stock.productDescriptionDTO = this.productDescription;
      
      this.stockService
          .createStockProduct(stock)
          .subscribe(stock => {
            this.alertService.success('O stock do produto "'+stock.productDescriptionDTO.name+'" foi adicionado com sucesso!');
            this.router.navigate(['/stocks']);
          },
          error => {
            this.alertService.danger('Ocorreu um erro ao adicionar o stock do producto');
          });
    }
  }

  updateStock(){
    if(this.stockForm.valid && !this.stockForm.pending){
      const stock = this.stockForm.getRawValue() as StockDTO;

      this.stock.groceryDTO = this.grocery;
      this.stock.productDescriptionDTO = this.productDescription;
      this.stock.purchasePrice = stock.purchasePrice;
      this.stock.salePrice = stock.salePrice;
      this.stock.quantity = stock.quantity;

      this.stockService
          .updateStock(this.stock)
          .subscribe(stock => {
            this.alertService.success('O stock do produto "'+stock.productDescriptionDTO.name+'" foi actualizado com sucesso!');
            this.router.navigate(['/stocks']);
          },
          error => {
            this.alertService.danger('Ocorreu um erro ao actualizar o stock do producto');
          });
    }
  }

  selectGrocery(grocery: GroceryDTO){
    this.grocery = grocery;
  }

}
