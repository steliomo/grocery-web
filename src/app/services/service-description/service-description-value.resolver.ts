import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServiceDescriptionDTO } from "./service-description-dto";
import { ServiceDescriptionService } from "./service-description.service";

@Injectable({ providedIn: 'root' })
export class ServiceDescriptionValueResolver implements Resolve<Observable<ServiceDescriptionDTO>>{

    constructor(private serviceDescriptionService: ServiceDescriptionService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ServiceDescriptionDTO> | Observable<Observable<ServiceDescriptionDTO>> | Promise<Observable<ServiceDescriptionDTO>> {
        return this.serviceDescriptionService.fetchServiceDescriptionByUuid(route.params.serviceDescriptionUuid);
    }
}