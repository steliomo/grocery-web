import { GenericDTO } from 'src/app/core/dto/generic-dto';

export interface ProductUnitDTO extends GenericDTO {
    unit: number;
    productUnitType: string;
    name: string;
}