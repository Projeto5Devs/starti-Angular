import { Injectable } from '@angular/core';

const KEY = 'token'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  retornaToken(){
    localStorage.getItem(KEY) ?? '';
  }

  salvaToken(token: string){
    localStorage.setItem(KEY, token);
  }

  excluirToken(){
    localStorage.removeItem(KEY)
  }

  possuiToken(){
    return this.retornaToken();
  }
}
