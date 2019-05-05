import { ProductDescription } from './product-description';

export interface ProductDescriptionDTO {
    productDescriptions: ProductDescription[];
    totalItems: number;
}