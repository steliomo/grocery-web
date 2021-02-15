import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServiceDescriptionService } from "./service-description.service";
import { ServiceDescriptionsDTO } from "./service-descriptions-dto";

@Injectable({ providedIn: 'root' })
export class ServiceDescriptionResolver implements Resolve<Observable<ServiceDescriptionsDTO>>{

    constructor(private serviceDescriptionService: ServiceDescriptionService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ServiceDescriptionsDTO> | Observable<Observable<ServiceDescriptionsDTO>> | Promise<Observable<ServiceDescriptionsDTO>> {
        return this.serviceDescriptionService.findAllServiceDescriptions(0, 8);
    }
}