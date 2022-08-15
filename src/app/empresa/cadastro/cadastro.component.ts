import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CepService } from 'src/app/candidato/service/cep.service';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private empresaService: EmpresaService,
    private cepService: CepService) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nomeFantasia: [null, Validators.required],
      razaoSocial: [null, Validators.required],
      segmento: [null, Validators.required],
      cnpj: [null, Validators.required],
      contato: this.formBuilder.group({
        email: [null, [Validators.required, Validators.email]],
        telefone: [null, Validators.required],
        website: [null]
      }),
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        cidade: [null, Validators.required],
        uf: [null, Validators.required],
        bairro: [null, Validators.required],
        rua: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null, Validators.required]
      }),
      userId: this.formBuilder.group({
        username: [null, Validators.required],
        password: [null, Validators.required]
      })
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.empresaService.cadastrarEmpresa(this.formulario.value).subscribe(response => console.log(response));
      window.location.href="http://localhost:4200/cadastro/empresa";
    } else {
      this.verificaValidacaoForm(this.formulario);
    }
  }

  verificaValidacaoForm(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      controle.markAsTouched();
      if (controle instanceof FormGroup){
        this.verificaValidacaoForm(controle);
      }
    });
  }

  buscarCEP() {
    let cep = this.formulario.get('endereco.cep').value

    this.cepService.buscarCepService(cep)
      .subscribe((dados) => this.populaForm(dados));
  }

  populaForm(dados) {
    this.formulario.patchValue({
      endereco: {
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

  validacaoCNPJ() {
    let cnpj = this.formulario.get('cnpj').value

    let resultadoValidacaoCnpj = this.validaCNPJ(cnpj);

    if (resultadoValidacaoCnpj) {
      document.getElementById('alerta-cnpj').style.display = 'none';
    } else {
      document.getElementById('alerta-cnpj').style.display = 'block';
    }
  }

  validacaoCampo(campo) {
    return {
      'is-invalid': !this.formulario.get(campo).valid && this.formulario.get(campo).touched,
      'is-valid': this.formulario.get(campo).valid && this.formulario.get(campo).touched,
    }
  }
}
