import { CepService } from '../service/cep.service';
import { CandidatoService } from '../service/candidato.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private candidatoService: CandidatoService,
    private cepService: CepService) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      sobrenome: [null, Validators.required],
      dataDeNascimento: [null, Validators.required],
      cpf: [null, Validators.required],
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
        password: [null, Validators.required],
      })
    });

  }

  onSubmit() {
    if (this.formulario.valid) {
      this.candidatoService.cadastrarCandidato(this.formulario.value).subscribe(response => console.log(response));
      window.location.href="http://localhost:4200/cadastro/candidato";
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

  validacaoCPF() {
    let cpf = this.formulario.get('cpf').value

    let resultadoValidacaoCpf = this.validaCPF(cpf);

    if (resultadoValidacaoCpf) {
      document.getElementById('alerta-cpf').style.display = 'none';
    } else {
      document.getElementById('alerta-cpf').style.display = 'block';
    }
  }

  validacaoCampo(campo) {
    return {
      'is-invalid': !this.formulario.get(campo).valid && this.formulario.get(campo).touched,
      'is-valid': this.formulario.get(campo).valid && this.formulario.get(campo).touched,
    }
  }
}
