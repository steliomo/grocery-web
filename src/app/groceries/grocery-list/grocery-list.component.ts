import { Component, OnInit } from '@angular/core';
import { Grocery } from '../grocery';
import { ActivatedRoute } from '@angular/router';
import { GroceryDTO } from '../grocery-dto';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

  groceries: Grocery[] = [];
  totalItems: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const groceryDTO:GroceryDTO = this.route.snapshot.data.groceryDTO;
    this.groceries = groceryDTO.groceries;
    this.totalItems = groceryDTO.totalItems;
  }

}
