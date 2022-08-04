import { LoginService } from '../service/auth/auth.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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

  //  document.getElementById ("footer").style.display = "none";
  //  document.querySelector("nav").style.display = "none";
  //  document.querySelector("body").style.cssText ="display: flex; justify-content: center; align-items: center; background-color: rgba(79, 79, 79, 0.037);"



  }

  public login(){
    return this.loginService.login(this.usuario, this.senha);
  }

}
