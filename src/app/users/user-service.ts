import { Injectable} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GroceryUserDTO } from './grocery-user-dto';
import { GroceryDTO } from '../groceries/grocery-dto';



@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) {}

    findUserRoles(){
        return this.http.get<Array<string>>(environment.API_URL+'/grocery-users/user-roles');
    }

    createGroceryUser(groceryUserDTO: GroceryUserDTO){
        return this.http.post<GroceryUserDTO>(environment.API_URL+'/grocery-users', groceryUserDTO);
    }

    findAllGroceryUsers(currentPage: number, maxResult:number){
        const params: HttpParams = new HttpParams().set('currentPage', currentPage.toString()).set('maxResult', maxResult.toString());
        return this.http.get<GroceryUserDTO[]>(environment.API_URL+'/grocery-users', { params });
    }
}