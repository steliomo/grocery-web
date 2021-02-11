import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { ServiceDTO } from '../service-dto';
import { ServiceService } from '../service-service';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent implements OnInit {

  serviceForm: FormGroup;
  service: ServiceDTO;

  constructor(private formBuilder: FormBuilder,
    private serviceService: ServiceService,
    private alertService: AlertService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.serviceForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]]
    });

    const serviceUuid = this.route.snapshot.params.serviceUuid;

    if (serviceUuid) {
      this.serviceService.findServiceByUuid(serviceUuid).subscribe(service => {
        this.service = service;
        this.serviceForm.patchValue(this.service);
      })
    }
  }

  saveService() {
    if (this.serviceForm.valid && !this.serviceForm.pending) {
      const serviceDTO = this.serviceForm.getRawValue() as ServiceDTO;
      this.serviceService.createService(serviceDTO).subscribe(createdService => {
        this.alertService.success('O serviço ' + createdService.name + ' foi adicionado com sucesso!');
        this.router.navigate(['/services/service-list']);
      }, error => {
        this.alertService.danger('Erro ao adicionar o serviço!');
        console.log(error);
      });
    }
  }

  updateService() {
    if (this.serviceForm.valid && !this.serviceForm.pending) {
      const serviceDTO = this.serviceForm.getRawValue() as ServiceDTO;
      this.service.name = serviceDTO.name;

      this.serviceService.updateService(this.service).subscribe(updatedService => {
        this.alertService.success('O Serviço ' + updatedService.name + ' foi actulizado com sucesso!');
        this.router.navigate(['/services/service-list']);
      },
        error => {
          this.alertService.danger('Ocorreu um erro ao actulizar o serviço!');
          console.log(error);
        })
    }
  }
}
