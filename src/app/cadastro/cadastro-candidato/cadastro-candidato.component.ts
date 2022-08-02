import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CepService } from '../services/cep-service.service';


@Component({
  selector: 'app-cadastro-candidato',
  templateUrl: './cadastro-candidato.component.html',
  styleUrls: ['./cadastro-candidato.component.css']
})
export class CadastroCandidatoComponent implements OnInit {

  novoCandidatoForm: FormGroup;

  constructor(private _cepService: CepService, private formBuilder: FormBuilder) { }

  buscarCep(valor, form) {
    this._cepService.buscarCepService(valor)
      .subscribe((dados) => this.populaForm(dados, form));
  }

  populaForm(dados, form) {
    form.setValue({
      cep: dados.cep,
      logradouro: dados.logradouro,
      bairro: dados.bairro,
      localidade: dados.localidade,
      uf: dados.uf,
    })
  }

  validaCPF(cpf: String) {
    if (cpf.length != 14) {
      return false;
    }

    let numeros = cpf.substring(0, 11).replace(/[^\d]+/g,'');
    let digitos = cpf.substring(12);

    let soma = 0;
    for(let i = 10; i > 1; i--){
      soma += parseInt(numeros.charAt(10 - i)) * i;
    }

    let resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

    if(resultado != parseInt(digitos.charAt(0))) {
      return false;
    }

    soma = 0;
    numeros = (numeros + digitos).substring(0, 10);

    for(var k = 11; k > 1; k--){
        soma += parseInt(numeros.charAt(11 - k)) * k;
    }

    resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

    if(resultado != parseInt(digitos.charAt(1))) {
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

  ngOnInit(): void {
    this.novoCandidatoForm = this.formBuilder.group({
      nome: ['', [Validators.required]]
    })
  }
}
