import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../auth/user';
import { LoginService } from './login.service';
import { TokenServie } from '../auth/token.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private tokenService: TokenServie, private alertService: AlertService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid && !this.loginForm.pending){
      const user: User = this.loginForm.getRawValue() as User;

      this.loginService
          .login(user)
          .subscribe(user => {
            this.tokenService.setFullName(user.fullName);
            this.router.navigate(['home']);
          }, error => {
            this.tokenService.removeToken();
            this.alertService.danger('Credências inválidas');
            console.log(error);
          })
    }
  }

}
