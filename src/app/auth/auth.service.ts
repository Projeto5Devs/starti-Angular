import { Router } from '@angular/router';
import { UserService } from './../user/user.service';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavbarService } from '../template/navbar/navbar.service';
import { AlertModalService } from '../componentes/alert-modal.service';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient, private userService: UserService, private router: Router, private nav: NavbarService, private alertService: AlertModalService) {
  }

  login(usuario:string, senha:string) {
    return this.httpClient.post<any>('http://localhost:8080/auth/signin',{
      username: usuario,
      password: senha
    }).subscribe((data) => {
      let token = JSON.parse(JSON.stringify(data)).token
      this.userService.salvaToken(token)
      this.router.navigate([''])
      this.nav.show()
    },
      (error) => {
        console.error("Usuário ou senha inválido")
        this.alertService.showAlertDanger('Usuário ou Senha inválido.')
      }
    )
  }

}
