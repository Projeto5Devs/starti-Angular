import { TokenService } from './../../token/token.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CadastroVagas } from './cadastro-vagas';

@Injectable({
  providedIn: 'root'
})
export class CadastroVagasService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  cadastrarNovaVaga(novaVaga: CadastroVagas){

    let token = this.tokenService.retornaToken()
    token = "Bearer " + token
    let httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    }
    return this.http.post<any>('http://localhost:8080/vaga/v1',novaVaga, httpOptions);
  }
}
