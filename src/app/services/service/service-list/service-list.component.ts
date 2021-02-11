import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceDTO } from '../service-dto';
import { ServiceService } from '../service-service';
import { ServicesDTO } from '../services-dto';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  services: ServiceDTO[];
  totalItems: number;

  constructor(private serviceService: ServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    const servicesDTO: ServicesDTO = this.route.snapshot.data.servicesDTO
    this.services = servicesDTO.servicesDTO;
    this.totalItems = servicesDTO.totalItems;
  }

  updateData(eventValue: any){
    console.log(eventValue);
    this.serviceService.findAllServices(eventValue.currentPage - 1, eventValue.pageSize).subscribe( servicesDTO => {
      this.services = servicesDTO.servicesDTO;
      this.totalItems = servicesDTO.totalItems;
    })
  }
}
