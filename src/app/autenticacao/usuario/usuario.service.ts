import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private tokenService: TokenService) { }

  private decodificaJWT(){
    const token = this.tokenService.retornaToken()
    console.log(token)
  }
}
