import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TokenServie {

    private AUTH_TOKEN: string = "authToken";
    private FULL_NAME: string = "fullName"

    setToken(token: string){
        window.localStorage.setItem(this.AUTH_TOKEN, token);
    }

    getToken(){
        return window.localStorage.getItem(this.AUTH_TOKEN);
    }

    removeToken(){
        window.localStorage.removeItem(this.AUTH_TOKEN);
        window.localStorage.removeItem(this.FULL_NAME);
    }

    hasToken(){
        return !!this.getToken();
    }

    getBasickToken(username: string, password: string){
        return 'Basic '+ btoa(username +':'+ password);
    }

    setFullName(fullName: string){     
        window.localStorage.setItem(this.FULL_NAME, fullName); 
    }

    getFullName():string {
        return window.localStorage.getItem(this.FULL_NAME);
    }
}