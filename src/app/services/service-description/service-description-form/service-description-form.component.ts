import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { ServiceDTO } from '../../service/service-dto';
import { ServiceService } from '../../service/service-service';
import { ServiceDescriptionDTO } from '../service-description-dto';
import { ServiceDescriptionService } from '../service-description.service';

@Component({
  selector: 'app-service-description-form',
  templateUrl: './service-description-form.component.html',
  styleUrls: ['./service-description-form.component.css']
})
export class ServiceDescriptionFormComponent implements OnInit {

  services: ServiceDTO[];
  serviceDescriptionForm: FormGroup;
  serviceDescription: ServiceDescriptionDTO;
  service: ServiceDTO;

  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private serviceService: ServiceService,
    private alertService: AlertService,
    private serviceDescriptionService: ServiceDescriptionService,
    private router: Router) { }

  ngOnInit() {
    this.services = this.route.snapshot.data.servicesDTO.servicesDTO;

    this.serviceDescriptionForm = this.formBuilder.group({
      description: ['', Validators.required]
    })

    const serviceDescription = this.route.snapshot.data.serviceDescriptionDTO as ServiceDescriptionDTO;

    if (serviceDescription) {
      this.serviceDescription = serviceDescription;
      this.service = serviceDescription.serviceDTO;
      this.serviceDescriptionForm.patchValue(this.serviceDescription);
    }
  }

  searchService(query: string) {
    if (query) {
      this.serviceService.findServiceByName(query).subscribe(servicesDTO => {
        this.services = servicesDTO.servicesDTO;
      });
    } else {
      this.services = this.route.snapshot.data.servicesDTO.servicesDTO;
    }
  }

  selectedService(serviceDTO: ServiceDTO) {
    this.service = serviceDTO;
  }

  saveServiceDescription() {
    if (this.serviceDescriptionForm.valid && !this.serviceDescriptionForm.pending) {
      if (!this.service) {
        this.alertService.danger('O campo "Serviço" deve ser seleccionado!');
        return;
      }

      const serviceDescription = this.serviceDescriptionForm.getRawValue() as ServiceDescriptionDTO;
      serviceDescription.serviceDTO = this.service;

      this.serviceDescriptionService.createServiceDescription(serviceDescription).subscribe(
        serviceDescription => {

          this.router.navigate(['/service']);
          this.alertService.success('A descrição do serviço "' + serviceDescription.name + '" foi adicionado com sucesso!');
        },
        error => {
          this.alertService.danger('Ocorreu um erro ao adcionar o detalhe do servico!');
          console.log(error);
        });
    }
  }

  updateServiceDescription() {
    if (this.serviceDescriptionForm.valid && !this.serviceDescriptionForm.pending) {

      if (!this.service) {
        this.alertService.danger('O campo "Serviço" deve ser seleccionado!');
        return;
      }

      const serviceDescription = this.serviceDescriptionForm.getRawValue() as ServiceDescriptionDTO;
      this.serviceDescription.serviceDTO = this.service;
      this.serviceDescription.description = serviceDescription.description;

      this.serviceDescriptionService.updateServiceDescription(this.serviceDescription).subscribe(
        serviceDescription => {
          this.router.navigate(['/service']);
          this.alertService.success('A descrição do serviço "' + serviceDescription.name + '" foi actulizado com sucesso!');
        },
        error => {
          this.alertService.danger('Ocorreu um erro ao actulizar o detalhe do serviço');
          console.log(error);
        });
    }
  }
}
