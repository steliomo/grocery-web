import { GroceryDTO } from '../groceries/grocery-dto';
import { ProductDescriptionDTO } from '../products/product-description/product-description-dto';
import { GenericDTO } from '../core/dto/generic-dto';

export interface StockDTO extends GenericDTO {
    groceryDTO: GroceryDTO;
    productDescriptionDTO: ProductDescriptionDTO;
    purchasePrice: number;
    salePrice: number;
    quantity:number;
}