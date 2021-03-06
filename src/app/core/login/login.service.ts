import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../auth/user';
import { TokenServie } from '../auth/token.service';
import { UserDTO } from 'src/app/users/user-dto';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient, private tokenService: TokenServie){}

    login(user: User){
        return this.http.post<UserDTO>(
            environment.API_URL+ '/users/login', { username: user.username, password: user.password}
        );
    }

}