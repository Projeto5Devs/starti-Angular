import { Component, OnInit } from '@angular/core';
import { CepService } from 'src/app/cadastro/services/cep-service.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  constructor(private _cepService: CepService) { }

  ngOnInit(): void {
    document.getElementById("footer").style.display = "none";
    document.querySelector("nav").style.display = "none";
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

  validaCNPJ(cnpj) {

    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj == '') return false;

    if (cnpj.length != 14)
      return false;

    let tamanho = cnpj.length - 2
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
        pos = 9;
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
      return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
        pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
      return false;

    return true;
  }

  validacaoCNPJ(cnpj) {
    let resultadoValidacaoCnpj = this.validaCNPJ(cnpj);

    if (resultadoValidacaoCnpj) {
      document.getElementById('alerta-cnpj').style.display = 'none';
    } else {
      document.getElementById('alerta-cnpj').style.display = 'block';
    }
  }

}
