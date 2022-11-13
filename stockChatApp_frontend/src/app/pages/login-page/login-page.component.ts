import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginPageComponent implements OnInit {

  isRegister = false;

  constructor() {}

  ngOnInit(): void {
  }

  switchTo(page: string) {
    console.log(page)
    this.isRegister = page === 'register';
  }

}
