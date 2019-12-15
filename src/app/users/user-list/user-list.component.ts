import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../user-service';
import { UserDTO } from '../user-dto';
import { UsersDTO } from '../users-dto';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  usersDTO: UserDTO[];
  totalItems: number = 0;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    const usersDTO: UsersDTO = this.route.snapshot.data.groceryUsers;
    this.usersDTO = usersDTO.usersDTO;
    this.totalItems = usersDTO.totalItems;
  }

  updateData(eventValue: any){
    this.userService.findAllGroceryUsers(eventValue.currentPage - 1, eventValue.pageSize)
                    .subscribe(usersDTO => {
                      this.usersDTO = usersDTO.usersDTO;
                      this.totalItems = usersDTO.totalItems;
                    });
  }
  
}
