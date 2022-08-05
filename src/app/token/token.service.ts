import { Injectable } from '@angular/core';

const KEY = 'token'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  retornaToken() {
    return localStorage.getItem(KEY) ?? ''
  }

  excluirToken() {
    localStorage.removeItem(KEY)
  }

  possuiToken() {
    return !!this.retornaToken();
  }

  criarToken(token: string){
    localStorage.setItem(KEY, token)
  }
  constructor() { }
}
