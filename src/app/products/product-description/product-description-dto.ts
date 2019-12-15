import { ProductDTO } from '../product/product-dto';
import { ProductUnitDTO } from '../product-unit/product-unit-dto';
import { GenericDTO } from 'src/app/core/dto/generic-dto';

export interface ProductDescriptionDTO extends GenericDTO {
    productDTO: ProductDTO;
	description: string;
    productUnitDTO: ProductUnitDTO;
    name: string;
}