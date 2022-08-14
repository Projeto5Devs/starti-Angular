import { CandidatoService } from './../service/candidato.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CepService } from 'src/app/cadastro/services/cep-service.service';
import {Location} from '@angular/common';
import { NavbarService } from 'src/app/template/navbar/navbar.service';
import { Candidato } from '../cadastro/candidato';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  constructor(private _cepService: CepService, private http: HttpClient, private _location: Location, public nav: NavbarService, private candidato: CandidatoService) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  onSubmit(form) {
    this.http.put('http://localhost:8080/pessoafisica/v1/${id}', JSON.stringify(form.value), this.httpOptions)
      .subscribe(dados => console.log(dados));
  }

  ngOnInit(): void {
    this.nav.hide();
    console.log(this.candidato.consultarCandidato())
  }

  buscarCep(valor, form) {
    this._cepService.buscarCepService(valor)
      .subscribe((dados) => this.populaForm(dados, form));
  }

  populaForm(dados, formulario) {
    formulario.form.patchValue({
      endereco: {
        cep: dados.cep,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        uf: dados.uf
      }
    })
  }

  validaCPF(cpf: String) {
    if (cpf.length != 14) {
      return false;
    }

    let numeros = cpf.substring(0, 11).replace(/[^\d]+/g, '');
    let digitos = cpf.substring(12);

    let soma = 0;
    for (let i = 10; i > 1; i--) {
      soma += parseInt(numeros.charAt(10 - i)) * i;
    }

    let resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

    if (resultado != parseInt(digitos.charAt(0))) {
      return false;
    }

    soma = 0;
    numeros = (numeros + digitos).substring(0, 10);

    for (var k = 11; k > 1; k--) {
      soma += parseInt(numeros.charAt(11 - k)) * k;
    }

    resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

    if (resultado != parseInt(digitos.charAt(1))) {
      return false;
    }
    return true;
  }

  validacaoCPF(cpf) {
    let resultadoValidacaoCpf = this.validaCPF(cpf);

    if (resultadoValidacaoCpf) {
      document.getElementById('alerta-cpf').style.display = 'none';
    } else {
      document.getElementById('alerta-cpf').style.display = 'block';
    }
  }

  voltar() {
    this._location.back();
    this.nav.show();
  }

}
