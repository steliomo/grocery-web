import { GenericDTO } from '../../core/dto/generic-dto';
import { ExpenseTypeCategory } from './expense-type-category';

export interface ExpenseTypeDTO extends GenericDTO {
    expenseTypeCategory: ExpenseTypeCategory,
    name: string,
    description: string;
}