
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empresa } from './cadastro/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private _http:HttpClient) {
  }

  cadastrarEmpresa(empresa: Empresa){
    return this._http.post<Empresa>('http://localhost:8080/api/empresas/v1', empresa);
  }

}
