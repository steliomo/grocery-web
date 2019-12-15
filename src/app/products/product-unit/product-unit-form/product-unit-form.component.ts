import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ProductUnitService } from '../product-unit.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductUnitDTO } from '../product-unit-dto';

@Component({
  selector: 'app-product-unit-form',
  templateUrl: './product-unit-form.component.html',
  styleUrls: ['./product-unit-form.component.css']
})
export class ProductUnitFormComponent implements OnInit {

  productUnitForm: FormGroup

  productUnitTypes = [];

  productUnit: ProductUnitDTO;

  constructor(private formBuilder: FormBuilder, private productUnitService: ProductUnitService, private alertService: AlertService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.productUnitForm = this.formBuilder.group({
      unit: ['', Validators.required],
      productUnitType: ['', Validators.required]
    });

    this.productUnitService
        .getProductUnitTypes()
        .subscribe(productUnitTypes => 
          this.productUnitTypes = productUnitTypes
        );

    const productUnitUuid = this.route.snapshot.params.productUnitUuid;

    if(productUnitUuid){
      this.productUnitService
          .findProductUnitByUuid(productUnitUuid)
          .subscribe(productUnit =>{
            this.productUnit = productUnit;
            this.productUnitForm.patchValue(this.productUnit);
          });
    }

  }

  saveProductUnit(){
    if(this.productUnitForm.valid && !this.productUnitForm.pending){
      
      const productUnit =  this.productUnitForm.getRawValue() as ProductUnitDTO;
      
      this.productUnitService
          .createProductUnit(productUnit)
          .subscribe(productUnit => {
            this.router.navigate(['/products/product-unit-list']);
            this.alertService.success('A unidade do producto "'+ productUnit.unit+' '+productUnit.productUnitType+'" foi criada com sucesso!');
          }, error => {
              this.alertService.danger(error);
              console.log(error);
          });
    
    }
  }

  updateProductUnit(){
    if(this.productUnitForm.valid && !this.productUnitForm.pending){

      const productUnit = this.productUnitForm.getRawValue() as ProductUnitDTO;
      this.productUnit.unit = productUnit.unit;
      this.productUnit.productUnitType = productUnit.productUnitType;

      this.productUnitService
          .updateProductUnit(this.productUnit)
          .subscribe(productUnit => {
            this.alertService.success('A unidade "'+ productUnit.unit +' '+productUnit.productUnitType+'" foi actualizada com sucesso!');
            this.router.navigate(['/products/product-unit-list']);
          },
          error => {
            this.alertService.danger('Ocorreu um erro ao actualizar a unidade "'+productUnit.unit +' '+productUnit.productUnitType);
          });
    }

  }

}
