import { GenericEntity } from '../core/model/generic-entity';
import { ProductDescription } from '../products/product-description/product-description';

export interface Stock extends GenericEntity {
    productDescription: ProductDescription;
    purchasePrice: number;
    salePrice: number;
    quantity:number;
}
