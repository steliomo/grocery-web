import { Product } from '../product/product';
import { ProductUnit } from '../product-unit/product-unit';
import { GenericEntity } from 'src/app/core/model/generic-entity';

export interface ProductDescription extends GenericEntity {
    product: Product;
    description: string;
    productUnit: ProductUnit;
}