import { Injectable} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UsersDTO } from './users-dto';
import { UserDTO } from './user-dto';



@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) {}

    findUserRoles(){
        return this.http.get<Array<string>>(environment.API_URL+'/grocery-users/user-roles');
    }

    createGroceryUser(userDTO: UserDTO){
        return this.http.post<UserDTO>(environment.API_URL+'/grocery-users', userDTO);
    }

    findAllGroceryUsers(currentPage: number, maxResult:number){
        const params: HttpParams = new HttpParams().set('currentPage', currentPage.toString()).set('maxResult', maxResult.toString());
        return this.http.get<UsersDTO>(environment.API_URL+'/grocery-users', { params });
    }
}