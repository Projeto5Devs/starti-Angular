
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Subject } from 'rxjs';
import { TokenService } from '../token/token.service';

import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<Usuario>(null)
  private username: string
  private roles: string[]

  constructor(private tokenService: TokenService) {
    this.tokenService.possuiToken() && this.decodificaJWT();
  }

  private decodificaJWT(){
    const token = this.tokenService.retornaToken()
    const usuario = jwtDecode(token) as Usuario
    this.username = usuario.sub;
    this.roles = usuario.roles
    this.userSubject.next(usuario)
    console.log(this.roles)
    console.log(usuario)
  }

  retornaUsuario(){
    return this.userSubject.asObservable()
  }


  logout(){
    this.tokenService.excluirToken();
    this.userSubject.next(null)
  }

  estaLogado(){
    return this.tokenService.possuiToken();
  }

  salvaToken(token: string) {
    this.tokenService.criarToken(token);
    this.decodificaJWT()
  }

  getUsername() {
    return this.username;
  }

  getRoles(){
    return this.roles;
  }
}
