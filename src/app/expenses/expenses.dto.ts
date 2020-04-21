import { ExpenseTypeDTO } from './expense-type/expense-type-dto';

export interface ExpensesDTO{
    expenseTypeDTOs: ExpenseTypeDTO[];
    totalItems: number;
}