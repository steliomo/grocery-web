import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ServiceDTO } from "./service-dto";
import { ServicesDTO } from "./services-dto";


@Injectable({ providedIn: 'root' })
export class ServiceService {
    constructor(private http: HttpClient) {
    }

    createService(serviceDTO: ServiceDTO) {
        return this.http.post<ServiceDTO>(environment.API_URL + '/services', serviceDTO);
    }

    findAllServices(currentPage: number, maxResult: number) {
        const params = new HttpParams().set('currentPage', currentPage.toString()).set('maxResult', maxResult.toString());
        return this.http.get<ServicesDTO>(environment.API_URL + '/services', { params });
    }

    findServiceByUuid(serviceUuid: string) {
        return this.http.get<ServiceDTO>(environment.API_URL + '/services/' + serviceUuid);
    }

    updateService(serviceDTO: ServiceDTO) {
        return this.http.put<ServiceDTO>(environment.API_URL + '/services', serviceDTO);
    }

    findServiceByName(serviceName: string) {
        return this.http.get<ServicesDTO>(environment.API_URL + '/services/by-name/' + serviceName);
    }
}