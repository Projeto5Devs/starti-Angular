import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient : HttpClient) { }

  public autenticar(usuario:string, senha:string): Observable<HttpResponse<any>> {
    return this.httpClient.post<any>('http://localhost:8080/auth/signin',{
      username: usuario,
      password: senha
  }
    // }, {observe: 'response'}
    // ).pipe(
    //   tap((res) => {
    //     const authToken = res.headers.get('x-access-token') ?? '';
    //     console.log(authToken)
    //   })
    );
  }


}
