import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { GroceryService } from '../grocery-service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { GroceryDTO } from '../grocery-dto';

@Component({
  selector: 'app-grocery-form',
  templateUrl: './grocery-form.component.html',
  styleUrls: ['./grocery-form.component.css']
})
export class GroceryFormComponent implements OnInit {

  groceryForm: FormGroup;
  grocery: GroceryDTO;

  constructor(private formBuilder: FormBuilder, 
              private groceryService: GroceryService, 
              private alertService: AlertService,
              private router: Router) { }

  ngOnInit() {
    this.groceryForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      phoneNumberOptional: [''],
      email: ['', Validators.email]
    });
  }

  saveGrocery(){
    if(this.groceryForm.valid && !this.groceryForm.pending){
     this.grocery =  this.groceryForm.getRawValue() as GroceryDTO;

     this.groceryService.createGrocery(this.grocery)
                        .subscribe(grocery =>{
                          this.alertService.success('O Mercearia com o nome: "'+grocery.name+'" foi criada com sucesso!');
                          this.router.navigate(['groceries'])
                        },
                        error => {
                          this.alertService.danger('Ocorreu um erro ao registar a mercearia!');
                          console.log(error);
                        });

    }
  }
}
