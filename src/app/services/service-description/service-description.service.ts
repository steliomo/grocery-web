import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ServiceDescriptionDTO } from './service-description-dto';
import { ServiceDescriptionsDTO } from './service-descriptions-dto';

@Injectable({
  providedIn: 'root'
})
export class ServiceDescriptionService {

  constructor(private http: HttpClient) { }

  findAllServiceDescriptions(currentPage: number, maxResult: number) {
    const params = new HttpParams().set('currentPage', currentPage.toString()).set('maxResult', maxResult.toString());
    return this.http.get<ServiceDescriptionsDTO>(environment.API_URL + '/service-descriptions', { params });
  }

  createServiceDescription(serviceDescription: ServiceDescriptionDTO) {
    return this.http.post<ServiceDescriptionDTO>(environment.API_URL + '/service-descriptions', serviceDescription);
  }

  fetchServiceDescriptionByUuid(serviceDescriptionUuid: string) {
    return this.http.get<ServiceDescriptionDTO>(environment.API_URL + '/service-descriptions/' + serviceDescriptionUuid);
  }

  updateServiceDescription(serviceDescription: ServiceDescriptionDTO) {
    return this.http.put<ServiceDescriptionDTO>(environment.API_URL + '/service-descriptions', serviceDescription);
  }
}
