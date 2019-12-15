import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { GroceryDTO } from 'src/app/groceries/grocery-dto';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { UserService } from '../user-service';
import { GroceriesDTO } from 'src/app/groceries/groceries-dto';
import { UserDTO } from '../user-dto';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;
  groceries: GroceryDTO[] = [];
  userRoles: string[] = [];
  groceryDTO: GroceryDTO;
  userDTO: UserDTO;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private alertService: AlertService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    
    this.userForm =  this.formBuilder.group({
      fullName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      groceryUserDTO: this.formBuilder.group({
        userRole: ['', Validators.required],
        expiryDate: ['', Validators.required],
        groceryDTO: [{}, Validators.required]
      }),
      email: ['']
    });

    const groceriesDTO: GroceriesDTO = this.route.snapshot.data.groceryDTO;
    this.groceries = groceriesDTO.groceriesDTO;
    
    this.userRoles = this.route.snapshot.data.userRoles;
  }


  saveUser(){

    if(this.userForm.valid && !this.userForm.pending){

      if(!this.groceryDTO){
        this.alertService.danger("A mercearia deve ser seleccionada!");
        return;
      }
      
      this.userDTO = this.userForm.getRawValue() as UserDTO;
      this.userDTO.groceryUserDTO.groceryDTO = this.groceryDTO;

      this.userService.createGroceryUser(this.userDTO)
                      .subscribe(userDTO => {
                        this.alertService.success('O (A) utilizador(a) '+userDTO.fullName+ ' foi registado(a) com sucesso!');
                        this.router.navigate(['users']);
                      }, 
                      error => {
                        this.alertService.danger('Ocorreu um erro ao registar o (a) utilizador(a)');
                        console.log(error);
                      });
    }
  }

  selectGrocery(groceryDTO: GroceryDTO){
    this.groceryDTO = groceryDTO;
  }

  searchGrocery(query: string){

  }
}
