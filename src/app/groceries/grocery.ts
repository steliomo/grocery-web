import { GenericEntity } from '../core/model/generic-entity';

export interface Grocery extends GenericEntity {
    name: string;
    address: string;
    phoneNumber: string;
    phoneNumberOptional: string;
    email: string;
}