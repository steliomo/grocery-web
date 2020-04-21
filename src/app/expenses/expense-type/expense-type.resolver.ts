import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ExpensesDTO } from '../expenses.dto';
import { ExpenseTypeService } from './expense-type.service';

@Injectable({
    providedIn: 'root'
})
export class ExpenseTypeResolver implements Resolve<ExpensesDTO> {

    constructor(private expenseTypeSevice: ExpenseTypeService){}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ExpensesDTO | Observable<ExpensesDTO> | Promise<ExpensesDTO> {
       return this.expenseTypeSevice.findAllExpensesType(0,8);
    }
}