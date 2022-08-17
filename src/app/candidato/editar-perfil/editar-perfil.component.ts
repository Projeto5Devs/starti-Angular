import { CandidatoService } from './../service/candidato.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CepService } from 'src/app/cadastro/services/cep-service.service';
import {Location} from '@angular/common';
import { NavbarService } from 'src/app/template/navbar/navbar.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  formulario: FormGroup;
  candidatos: any;
  id: number;
  idPessoaFisica: number;
  isDone: boolean;

  constructor(private formBuilder: FormBuilder, private _cepService: CepService, private http: HttpClient, private _location: Location, public nav: NavbarService, private candidato: CandidatoService, private candidatoService: CandidatoService, private userService: UserService) { }

   ngOnInit(): void {
    this.nav.hide();

    this.id = this.userService.getId();

    this.candidatoService.consultarPorId(this.id).subscribe((data) => {
      this.candidatos = data
      this.idPessoaFisica = data['idPessoaFisica']
      this.buildForm();
    })
  }

  onEdit() {
    console.log('Editando')
    console.log(this.idPessoaFisica)
    this.candidatoService.editarCandidato(this.formulario.value).subscribe(response => console.log(response));
    window.location.href="http://localhost:4200/candidato";
  }

  onDelete() {
    console.log('Deletando');
    console.log(this.idPessoaFisica);
    this.candidatoService.deletarPorIdCandidato(this.idPessoaFisica).subscribe(response => console.log(response));
    window.location.href="http://localhost:4200/";
    this.userService.logout();
  }

  buildForm() {
    this.formulario = this.formBuilder.group({
      key: [this.idPessoaFisica],
      nome: [this.candidatos.nome, Validators.required],
      sobrenome: [this.candidatos.sobrenome, Validators.required],
      dataDeNascimento: [this.candidatos.dataDeNascimento, Validators.required],
      cpf: [this.candidatos.cpf, Validators.required],
      contato: this.formBuilder.group({
        email: [this.candidatos.contato.email, [Validators.required, Validators.email]],
        telefone: [this.candidatos.contato.telefone, Validators.required],
        website: [null]
      }),
      endereco: this.formBuilder.group({
        cep: [this.candidatos.endereco.cep, Validators.required],
        cidade: [this.candidatos.endereco.cidade, Validators.required],
        uf: [this.candidatos.endereco.uf, Validators.required],
        bairro: [this.candidatos.endereco.bairro, Validators.required],
        rua: [this.candidatos.endereco.rua, Validators.required],
        numero: [this.candidatos.endereco.numero, Validators.required],
        complemento: [this.candidatos.endereco.complemento, Validators.required]
      }),
      userId: this.formBuilder.group({
        username: [this.candidatos.userId.username, Validators.required],
        password: [null, Validators.required],
      })
    })
    this.isDone = true;
  }

  buscarCEP() {
    let cep = this.formulario.get('endereco.cep').value

    this._cepService.buscarCepService(cep)
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

  voltar() {
    this._location.back();
    this.nav.show();
  }

}
