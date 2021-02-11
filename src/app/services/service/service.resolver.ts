import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServiceService } from "./service-service";
import { ServicesDTO } from "./services-dto";


@Injectable({ providedIn: 'root' })
export class ServiceResolver implements Resolve<Observable<ServicesDTO>>{

    constructor(private serviceService: ServiceService) { }


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ServicesDTO> | Observable<Observable<ServicesDTO>> | Promise<Observable<ServicesDTO>> {
        return this.serviceService.findAllServices(0, 8);
    }

}