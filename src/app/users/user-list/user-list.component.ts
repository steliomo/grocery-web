import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroceryUserDTO } from '../grocery-user-dto';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  groceryUsers: GroceryUserDTO[];
  totalItems: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.groceryUsers = this.route.snapshot.data.groceryUsers;

    if(this.groceryUsers.length !== 0){
      this.totalItems = this.groceryUsers[0].totalItems;
    }
  }

}
