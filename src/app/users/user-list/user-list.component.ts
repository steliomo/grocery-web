import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroceryUserDTO } from '../grocery-user-dto';
import { UserService } from '../user-service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  groceryUsers: GroceryUserDTO[];
  totalItems: number = 0;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.groceryUsers = this.route.snapshot.data.groceryUsers;

    if(this.groceryUsers.length !== 0){
      this.totalItems = this.groceryUsers[0].totalItems;
    }
  }

  updateData(eventValue: any){
    this.userService.findAllGroceryUsers(eventValue.currentPage - 1, eventValue.pageSize)
                    .subscribe(groceryUsers => {
                      this.groceryUsers = groceryUsers;
                      this.totalItems = this.groceryUsers[0].totalItems;
                    });
  }

}
