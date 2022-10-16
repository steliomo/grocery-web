import { Component, OnInit } from '@angular/core';
import { TokenServie } from '../auth/token.service';

@Component({
  selector: 'go-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(private tokenService: TokenServie) { }

  ngOnInit() {
  }

  hasRole() {
    return this.tokenService.hasAdminRole();
  }

}
