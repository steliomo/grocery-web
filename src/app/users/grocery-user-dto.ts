import { Grocery } from '../groceries/grocery';

export interface GroceryUserDTO {
    fullName: string;
    grocery: Grocery;
    username: string;
    password: string;
    userRole: string;
    expiryDate: Date;
    email: string;
    totalItems: number;
}