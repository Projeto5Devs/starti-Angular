import { Candidato } from '../cadastro/candidato';
import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  constructor(private _http:HttpClient) {
  }

  cadastrarCandidato(candidato: Candidato){
    return this._http.post<Candidato>('http://localhost:8080/pessoafisica/v1', candidato);
  }

  editarCandidato(candidato: Candidato){
    return this._http.put<Candidato>(`http://localhost:8080/pessoafisica/v1`, candidato);
  }

  consultarCandidato(){
    return this._http.get<Candidato>('http://localhost:8080/pessoafisica/v1').subscribe((data) => {
      console.log(data)
    },
      (error) => {
        console.error("Usuário ou senha inválido")
      }
    );
  }

  consultarPorId(id: number){
    return this._http.get<Candidato>(`http://localhost:8080/pessoafisica/v1/usuario/${id}`)
  }


}
