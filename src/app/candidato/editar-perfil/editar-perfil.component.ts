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

  id: number;
  idPessoaFisica: number;

  constructor(private formBuilder: FormBuilder, private _cepService: CepService, private http: HttpClient, private _location: Location, public nav: NavbarService, private candidato: CandidatoService, private candidatoService: CandidatoService, private userService: UserService) {
    this.id = userService.getId();

    this.candidatoService.consultarPorId(this.id).subscribe((data) => {
      this.idPessoaFisica = data['idPessoaFisica']
    })
   }

  onEdit() {
    console.log('Editando')
    console.log(this.idPessoaFisica)
    this.candidatoService.editarCandidato(this.formulario.value).subscribe(response => console.log(response));
  }

  onDelete() {
    console.log('Deletando');
    console.log(this.idPessoaFisica);
    this.candidatoService.deletarPorIdCandidato(this.idPessoaFisica).subscribe(response => console.log(response));
    window.location.href="http://localhost:4200/";
    this.userService.logout();
  }

  ngOnInit(): void {

    this.nav.hide();

    this.formulario = this.formBuilder.group({
      key: [this.idPessoaFisica],
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
