import {StockDTO} from '../stocks/stock-dto'; 

export interface StocksDTO {
    stocksDTO: StockDTO[];
    totalItems: number;
}