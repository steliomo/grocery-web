import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GroceryDTO } from 'src/app/groceries/grocery-dto';
import { ServiceDescriptionDTO } from 'src/app/services/service-description/service-description-dto';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { ServiceItemDTO } from '../service-item-dto';
import { ServiceItemService } from '../service-item.service';

@Component({
  selector: 'app-service-item-form',
  templateUrl: './service-item-form.component.html',
  styleUrls: ['./service-item-form.component.css']
})
export class ServiceItemFormComponent implements OnInit {

  units: GroceryDTO[];
  serviceDescriptions: ServiceDescriptionDTO[];
  serviceItemForm: FormGroup;
  unit: GroceryDTO;
  serviceDescription: ServiceDescriptionDTO;
  serviceItem: ServiceItemDTO;

  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private serviceItemService: ServiceItemService,
    private router: Router) { }

  ngOnInit() {
    this.units = this.route.snapshot.data.groceriesDTO.groceriesDTO;
    this.serviceDescriptions = this.route.snapshot.data.serviceDescriptionsDTO.serviceDescriptionsDTO;
    this.serviceItem = this.route.snapshot.data.serviceItemDTO

    this.serviceItemForm = this.formBuilder.group({
      salePrice: ['', Validators.required]
    });

    if (this.serviceItem) {
      this.unit = this.serviceItem.unitDTO;
      this.serviceDescription = this.serviceItem.serviceDescriptionDTO;

      this.serviceItemForm.patchValue(this.serviceItem);
    }
  }

  selectUnit(unit: GroceryDTO) {
    this.unit = unit;
  }

  selectServiceDescription(serviceDescription: ServiceDescriptionDTO) {
    this.serviceDescription = serviceDescription;
  }

  saveServiceItem() {
    if (this.serviceItemForm.valid && !this.serviceItemForm.pending) {
      const serviceItem = this.serviceItemForm.getRawValue() as ServiceItemDTO;

      if (!this.unit) {
        this.alertService.danger('O estabelecimento deve ser seleccionado!');
        return;
      }

      if (!this.serviceDescription) {
        this.alertService.danger('O Serviço deve ser seleccionado!');
        return;
      }

      serviceItem.unitDTO = this.unit;
      serviceItem.serviceDescriptionDTO = this.serviceDescription;

      this.serviceItemService.createServiceItem(serviceItem).subscribe(
        serviceItem => {
          this.router.navigate(['/service-items']);
          this.alertService.success('O item do serviço "' + serviceItem.name + '" foi adicionado com sucesso!')
        },
        error => {
          this.alertService.danger('Ocorreu um erro ao adicionar o item do serviço!');
          console.log(error);
        });
    }
  }


  updateServiceItem() {
    if (this.serviceItemForm.valid && !this.serviceItemForm.pending) {
      const serviceItem = this.serviceItemForm.getRawValue() as ServiceItemDTO;

      this.serviceItem.unitDTO = this.unit;
      this.serviceItem.serviceDescriptionDTO = this.serviceDescription;
      this.serviceItem.salePrice = serviceItem.salePrice;

      this.serviceItemService.updateServiceItem(this.serviceItem).subscribe(
        serviceItem => {
          this.router.navigate(['/service-items']);
          this.alertService.success('O item do serviço "' + serviceItem.name + '" foi actulizado com sucesso!');
        },
        error => {
          this.alertService.danger('Ocorreu um erro ao actualizar o item de serviço!');
          console.log(error);
        });
    }
  }

}
