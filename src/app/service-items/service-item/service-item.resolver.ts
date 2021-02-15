import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServiceItemService } from "./service-item.service";
import { ServiceItemsDTO } from "./service-items-dto";


@Injectable({
    providedIn: 'root'
})
export class ServiceItemResolver implements Resolve<Observable<ServiceItemsDTO>>{

    constructor(private serviceItemService: ServiceItemService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ServiceItemsDTO> | Observable<Observable<ServiceItemsDTO>> | Promise<Observable<ServiceItemsDTO>> {
        const currentPage: number = 0;
        const maxResult: number = 8;

        return this.serviceItemService.fetchServiceItems(currentPage, maxResult);
    }

}