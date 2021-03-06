import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { ExpenseTypeDTO } from '../expense-type-dto';
import { ExpenseTypeService } from '../expense-type.service';
import { ExpenseTypeCategory } from '../expense-type-category';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-expense-type-form',
  templateUrl: './expense-type-form.component.html',
  styleUrls: ['./expense-type-form.component.css']
})
export class ExpenseTypeFormComponent implements OnInit {

  expenseTypeForm: FormGroup;
  expenseType: ExpenseTypeDTO;
  categories = ExpenseTypeCategory;

  constructor(private formBuilder: FormBuilder, private expenseTypeService: ExpenseTypeService, private alertService: AlertService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.expenseTypeForm = this.formBuilder.group({
      expenseTypeCategory: ['', Validators.required],
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', Validators.required]
    })

    const expenseTypeDTO = this.route.snapshot.data.expenseTypeDTO;

    if (expenseTypeDTO) {
        this.expenseType = expenseTypeDTO;
        this.expenseTypeForm.patchValue(this.expenseType);
    }
  }

  saveExpenseType() {
    if (this.expenseTypeForm.valid && !this.expenseTypeForm.pending) {
      this.expenseType = this.expenseTypeForm.getRawValue() as ExpenseTypeDTO;

      this.expenseTypeService.createExpenseType(this.expenseType).subscribe(expenseType => {
        this.alertService.success('O tipo de despesa com o nome "' + expenseType.name + '" foi adicionado com sucesso!');
        this.router.navigate(['expenses']);
      });
    }
  }

  updateExpenseType() {
    if (this.expenseTypeForm.valid && !this.expenseTypeForm.pending) {

      const expenseType = this.expenseTypeForm.getRawValue() as ExpenseTypeDTO;
      this.expenseType.expenseTypeCategory = expenseType.expenseTypeCategory;
      this.expenseType.name = expenseType.name;
      this.expenseType.description = expenseType.description;

      this.expenseTypeService.updateExpenseType(this.expenseType).subscribe(expenseType => {
        this.alertService.success('O tipo de despesa com o nome "' + expenseType.name + '" foi editado com sucesso!');
        this.router.navigate(['expenses']);
      });
    }
  }

}
