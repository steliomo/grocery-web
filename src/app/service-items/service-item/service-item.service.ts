import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ServiceItemDTO } from './service-item-dto';
import { ServiceItemsDTO } from './service-items-dto';

@Injectable({
  providedIn: 'root'
})
export class ServiceItemService {

  constructor(private http: HttpClient) { }

  fetchServiceItems(currentPage: number, maxResult: number) {
    const params = new HttpParams().set('currentPage', currentPage.toString()).set('maxResult', maxResult.toString());
    return this.http.get<ServiceItemsDTO>(environment.API_URL + '/service-items', { params });
  }

  createServiceItem(serviceItem: ServiceItemDTO) {
    return this.http.post<ServiceItemDTO>(environment.API_URL + '/service-items', serviceItem);
  }

  fetchItemServiceByUuid(serviceItemUuid: string) {
    return this.http.get<ServiceItemDTO>(environment.API_URL + '/service-items/' + serviceItemUuid);
  }

  updateServiceItem(serviceItem: ServiceItemDTO) {
    return this.http.put<ServiceItemDTO>(environment.API_URL + '/service-items', serviceItem);
  }
}
