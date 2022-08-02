
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CadastroVagas } from './cadastro-vagas';

@Injectable({
  providedIn: 'root'
})
export class CadastroVagasService {

  constructor(private http: HttpClient) { }

  cadastrarNovaVaga(novaVaga: CadastroVagas){
    return this.http.post<any>('http://localhost:8080/vaga/v1',novaVaga);
  }
}
