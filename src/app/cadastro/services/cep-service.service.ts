import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private _http:HttpClient) {

  }

 buscarCepService(cep:string){
  return this._http.get(`https://viacep.com.br/ws/${cep}/json/`)
  }
}
