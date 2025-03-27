import { GroceryDTO } from '../groceries/grocery-dto';

export interface GroceryUserDTO {
    unitDTO: GroceryDTO;
    userRole: string;
    expiryDate: Date;
}