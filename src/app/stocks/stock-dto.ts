import { Stock } from './stock';

export interface StockDTO {
    stocks: Stock[];
    totalItems: number;
}