import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ExpensesDTO } from '../expenses.dto';
import { ExpenseTypeDTO } from './expense-type-dto';


@Injectable({
  providedIn: 'root'
})
export class ExpenseTypeService {

  constructor(private http: HttpClient) { }

  createExpenseType(expenseTypeDTO: ExpenseTypeDTO) {
    return this.http.post<ExpenseTypeDTO>(environment.API_URL + '/expenses-type', expenseTypeDTO);
  }

  updateExpenseType(expenseTypeDTO: ExpenseTypeDTO) {
    return this.http.put<ExpenseTypeDTO>(environment.API_URL + '/expenses-type', expenseTypeDTO);
  }

  findAllExpensesType(currentPage: number, maxResult: number) {
    const params: HttpParams = new HttpParams().set('currentPage', currentPage.toString()).set('maxResult', maxResult.toString());
    return this.http.get<ExpensesDTO>(environment.API_URL + '/expenses-type', { params });

  }
  findExpenseTypeByUuid(expenseTypeUuid: any) {
    return this.http.get<ExpenseTypeDTO>(environment.API_URL + '/expenses-type/' + expenseTypeUuid);
  }
}
