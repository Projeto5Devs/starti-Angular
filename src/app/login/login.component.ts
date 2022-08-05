

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = '';
  senha = '';

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  public login(){
    return this.loginService.login(this.usuario, this.senha);
  }

}
