import { Component, OnInit } from '@angular/core';
import { TokenServie } from '../auth/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'go-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private tokenService: TokenServie, private router: Router) { }

  ngOnInit() {
  }

  getUsername() {
    return this.tokenService.getFullName();
  }

  logout() {
    this.tokenService.removeToken()
    this.router.navigate(['login']);
  }

  hasRole(): boolean {
    return this.tokenService.hasAdminRole();
  }

  release(): string {
    return "(v2.1)";
  }

}
