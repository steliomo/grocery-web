import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroceryDTO } from '../grocery-dto';
import { GroceriesDTO } from '../groceries-dto';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

  groceriesDTO: GroceryDTO[] = [];
  totalItems: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const groceriesDTO: GroceriesDTO = this.route.snapshot.data.groceryDTO;
    this.groceriesDTO = groceriesDTO.groceriesDTO;
    this.totalItems = groceriesDTO.totalItems;
  }

}
