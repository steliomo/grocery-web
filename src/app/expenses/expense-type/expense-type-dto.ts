import { GenericDTO } from '../../core/dto/generic-dto';

export interface ExpenseTypeDTO extends GenericDTO {
    name: string,
    description: string;
}