import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExpenseTypeDTO } from '../expense-type-dto';

@Component({
  selector: 'app-expense-type-list',
  templateUrl: './expense-type-list.component.html',
  styleUrls: ['./expense-type-list.component.css']
})
export class ExpenseTypeListComponent implements OnInit {
  
  expensesType: ExpenseTypeDTO[] = [];
  totalItems: number = 0;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const expensesDTO = this.route.snapshot.data.expensesDTO;
    this.expensesType = expensesDTO.expenseTypeDTOs;
    this.totalItems = expensesDTO.totalItems;
  }
}
