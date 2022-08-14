import { NavbarService } from './../template/navbar/navbar.service';


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../auth/auth.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = '';
  senha = '';

  constructor(private loginService: LoginService, private router: Router, private nav: NavbarService, private _location: Location) { }

  ngOnInit(): void {
    this.nav.hide()
  }

  public login(){
    return this.loginService.login(this.usuario, this.senha);
  }

  voltar() {
    this._location.back();
  }

}
