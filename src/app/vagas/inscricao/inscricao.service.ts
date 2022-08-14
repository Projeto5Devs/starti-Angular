import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inscricao } from './inscricao';

@Injectable({
  providedIn: 'root'
})
export class InscricaoService {

  constructor(private _http:HttpClient) { }

  inscrever(inscricao: Inscricao){
    return this._http.post<Inscricao>('http://localhost:8080/inscricao/v1', inscricao);
  }
}
