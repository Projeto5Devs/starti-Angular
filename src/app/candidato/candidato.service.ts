import { Candidato } from './cadastro/candidato';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  constructor(private _http:HttpClient) {
  }

  cadastrarCandidato(candidato: Candidato){
    console.log(candidato)
    return this._http.post<Candidato>('http://localhost:8080/pessoafisica/v1', candidato);
  }

}
