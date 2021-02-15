import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceItemDTO } from '../service-item-dto';
import { ServiceItemService } from '../service-item.service';
import { ServiceItemsDTO } from '../service-items-dto';

@Component({
  selector: 'app-service-item-list',
  templateUrl: './service-item-list.component.html',
  styleUrls: ['./service-item-list.component.css']
})
export class ServiceItemListComponent implements OnInit {

  totalItems: number = 0;
  serviceItems: ServiceItemDTO[];

  constructor(private route: ActivatedRoute,
    private serviceItemService: ServiceItemService) { }

  ngOnInit() {
    const serviceItemsDTO: ServiceItemsDTO = this.route.snapshot.data.serviceItemsDTO as ServiceItemsDTO;
    this.totalItems = serviceItemsDTO.totalItems;
    this.serviceItems = serviceItemsDTO.serviceItemsDTO;
  }

  updateData(eventValue: any) {
    this.serviceItemService.fetchServiceItems(eventValue.currentPage - 1, eventValue.pageSize).subscribe(
      serviceItems => {
        this.serviceItems = serviceItems.serviceItemsDTO;
      });
  }
}
