import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Grocery } from 'src/app/groceries/grocery';
import { GroceryDTO } from 'src/app/groceries/grocery-dto';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { GroceryUserDTO } from '../grocery-user-dto';
import { UserService } from '../user-service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;
  groceries: Grocery[] = [];
  userRoles: string[] = [];
  groceryUserDTO: GroceryUserDTO;
  grocery: Grocery;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private alertService: AlertService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    
    this.userForm =  this.formBuilder.group({
      fullName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      userRole: ['', Validators.required],
      expiryDate: ['', Validators.required],
      email: ['']
    });

    const groceryDTO:GroceryDTO = this.route.snapshot.data.groceryDTO;
    this.groceries = groceryDTO.groceries;

    this.userRoles = this.route.snapshot.data.userRoles;
  }


  saveUser(){
    if(this.userForm.valid && !this.userForm.pending){
      
      if(!this.grocery){
        this.alertService.danger("A mercearia deve ser seleccionada!");
        return;
      }
      
      const groceryUserDTO: GroceryUserDTO = this.userForm.getRawValue() as GroceryUserDTO;
      groceryUserDTO.grocery = this.grocery;
      
      this.userService.createGroceryUser(groceryUserDTO)
                      .subscribe(groceryUserDTO => {
                        this.alertService.success('O (A) utilizador(a) '+groceryUserDTO.fullName+ ' foi registado(a) com sucesso!');
                        this.router.navigate(['users']);
                      }, 
                      error => {
                        this.alertService.danger('Ocorreu um erro ao registar o (a) utilizador(a)');
                        console.log(error);
                      });
    }
  }

  selectGrocery(grocery: Grocery){
    this.grocery = grocery;
  }

  searchGrocery(query: string){

  }

}
