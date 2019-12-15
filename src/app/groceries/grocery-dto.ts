import { GenericDTO } from '../core/dto/generic-dto';

export interface GroceryDTO extends GenericDTO{
    name: string;
    address: string;
    phoneNumber: string;
    phoneNumberOptional: string;
    email: string;
}