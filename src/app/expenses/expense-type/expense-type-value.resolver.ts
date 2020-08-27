import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ExpenseTypeDTO } from './expense-type-dto';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpenseTypeService } from './expense-type.service';


@Injectable({
    providedIn: 'root'
})
export class ExpenseTypeValueResolver implements Resolve<ExpenseTypeDTO>{

    constructor(private expenseTypeService: ExpenseTypeService){
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ExpenseTypeDTO | Observable<ExpenseTypeDTO> | Promise<ExpenseTypeDTO> {
        return this.expenseTypeService.findExpenseTypeByUuid(route.params.expenseTypeUuid);
    }
}