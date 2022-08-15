import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inscricao } from './inscricao';

@Injectable({
  providedIn: 'root'
})
export class InscricaoService {

  constructor(private _http:HttpClient) { }

  inscrever(inscricao: Inscricao){
    return this._http.post<Inscricao>('http://localhost:8080/inscricao/v1', inscricao);
  }

  buscarPorCandidato(id: number): Observable<any> {
    return this._http.get<Inscricao>(`http://localhost:8080/inscricao/v1/${id}`);
  }


  deletarPorIdVaga(id: number) {
    return this._http.delete(`http://localhost:8080/inscricao/v1/${id}`);
  }
}
