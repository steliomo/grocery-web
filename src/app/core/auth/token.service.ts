import { Injectable } from '@angular/core';
import { GroceryDTO } from 'src/app/groceries/grocery-dto';

@Injectable({
    providedIn: 'root'
})
export class TokenServie {

    private AUTH_TOKEN: string = "authToken";
    private FULL_NAME: string = "fullName"
    private GORCERY: string = "grocery";

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

    setGrocery(groceryDTO: GroceryDTO){
        window.localStorage.setItem(this.GORCERY, groceryDTO.id+"_"+groceryDTO.uuid+"_"+groceryDTO.name);
    }

    getGrocery():GroceryDTO{
        
        const groceryString: string  = window.localStorage.getItem(this.GORCERY);
        const grocerySplit: string[] = groceryString.split("_");
       
        const grocery = {} as GroceryDTO;
        
        grocery.id = Number(grocerySplit[0]);
        grocery.uuid = grocerySplit[1];
        grocery.name = grocerySplit[2];

        return grocery;
    }
}