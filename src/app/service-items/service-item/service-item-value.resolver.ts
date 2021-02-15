import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServiceItemDTO } from "./service-item-dto";
import { ServiceItemService } from "./service-item.service";



@Injectable({
    providedIn: 'root'
})
export class ServiceItemValueResolver implements Resolve<Observable<ServiceItemDTO>>{

    constructor(private serviceItemService: ServiceItemService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ServiceItemDTO> | Observable<Observable<ServiceItemDTO>> | Promise<Observable<ServiceItemDTO>> {
        return this.serviceItemService.fetchItemServiceByUuid(route.params.serviceItemUuid);
    }

}