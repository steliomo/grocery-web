import { GenericDTO } from 'src/app/core/dto/generic-dto';
import { GroceryUserDTO } from './grocery-user-dto';

export interface UserDTO extends GenericDTO {
    fullName:string;
    username:string;
    password:string;
    groceryUserDTO: GroceryUserDTO;
    email: string;
}