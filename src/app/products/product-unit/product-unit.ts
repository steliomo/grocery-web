import { GenericEntity } from 'src/app/core/model/generic-entity';

export interface ProductUnit extends GenericEntity {
    unit: number;
    productUnitType: string;
}