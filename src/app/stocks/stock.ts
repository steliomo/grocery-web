import { GenericEntity } from '../core/model/generic-entity';
import { ProductDescription } from '../products/product-description/product-description';
import { Grocery } from '../groceries/grocery';

export interface Stock extends GenericEntity {
    grocery: Grocery;
    productDescription: ProductDescription;
    purchasePrice: number;
    salePrice: number;
    quantity:number;
}
