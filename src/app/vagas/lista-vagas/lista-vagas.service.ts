import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidatoService } from 'src/app/candidato/service/candidato.service';
import { TokenService } from 'src/app/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class ListaVagasService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  getEmbedded(): Observable<any> {
    return this.http.get('http://localhost:8080/vaga/v1');
  }

  buscarPorTipoModalidade(tipo:string, modalidade:string) : Observable<any>{
    return this.http.get(`http://localhost:8080/vaga/v1/buscarCargoEModalidade?tipo=${tipo}&modalidade=${modalidade}`)
  }

  buscarPorModalidade(modalidade:string) : Observable<any>{
    return this.http.get(`http://localhost:8080/vaga/v1/buscarPorModalidade/${modalidade}`)
  }

  buscarPorTipo(tipo:string) : Observable<any>{
    return this.http.get(`http://localhost:8080/vaga/v1/buscarPorTipo/${tipo}`)
  }

  buscarPorCargo(cargo:string) : Observable<any>{
    return this.http.get(`http://localhost:8080/vaga/v1/buscarPorCargo/${cargo}`)
  }

  buscarPorEmpresa(empresa:number) : Observable<any>{
    return this.http.get(`http://localhost:8080/vaga/v1/buscarPorEmpresa/${empresa}`)
  }
}
