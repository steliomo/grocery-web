import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceDescriptionDTO } from '../service-description-dto';
import { ServiceDescriptionService } from '../service-description.service';
import { ServiceDescriptionsDTO } from '../service-descriptions-dto';

@Component({
  selector: 'app-service-description-list',
  templateUrl: './service-description-list.component.html',
  styleUrls: ['./service-description-list.component.css']
})
export class ServiceDescriptionListComponent implements OnInit {

  serviceDescriptions: ServiceDescriptionDTO[];
  totalItems: number;

  constructor(private route: ActivatedRoute,
    private serviceDescriptionService: ServiceDescriptionService) { }

  ngOnInit() {
    const serviceDescriptionsDTO: ServiceDescriptionsDTO = this.route.snapshot.data.serviceDescriptionsDTO;
    this.serviceDescriptions = serviceDescriptionsDTO.serviceDescriptionsDTO;
    this.totalItems = serviceDescriptionsDTO.totalItems;
  }

  updateData(eventValue: any) {
    this.serviceDescriptionService.findAllServiceDescriptions(eventValue.currentPage - 1, eventValue.pageSize).subscribe(
      serviceDescriptionsDTO => {
        this.serviceDescriptions = serviceDescriptionsDTO.serviceDescriptionsDTO;
      });
  }
}
