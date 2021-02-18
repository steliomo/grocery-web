import { Injectable, ResolvedReflectiveFactory } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { EnumsDTO } from "../core/dto/enums-dto";
import { GroceryService } from "./grocery-service";

@Injectable({
    providedIn: 'root'
})
export class UnitTypesResolver implements Resolve<Observable<EnumsDTO>>{

    constructor(private unitService: GroceryService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<EnumsDTO> | Observable<Observable<EnumsDTO>> | Promise<Observable<EnumsDTO>> {
        return this.unitService.findAllUnitTypes();
    }
}