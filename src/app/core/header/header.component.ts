import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'go-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string = "Teste";

  constructor() { }

  ngOnInit() {
  }

}
