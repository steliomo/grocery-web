import { GroceryDTO } from '../groceries/grocery-dto';

export interface GroceryUserDTO {
    groceryDTO: GroceryDTO;
    userRole: string;
    expiryDate: Date;
}