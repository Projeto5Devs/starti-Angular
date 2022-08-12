import { CandidatoService } from './../candidato.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private candidatoService: CandidatoService) {
    this.formulario = this.formBuilder.group({
      nome: [''],
      sobrenome: [''],
      dataDeNascimento: [''],
      cpf: [''],
      contato: this.formBuilder.group({
        email: [''],
        telefone: [''],
        website: ['']
      }),
      endereco: this.formBuilder.group({
        cep: [''],
        cidade: [''],
        uf: [''],
        bairro: [''],
        rua: [''],
        numero: [''],
        complemento: ['']
      }),
      userId: this.formBuilder.group({
        username: [''],
        password: ['']
      })
    });
  }

  onSubmit() {
    this.candidatoService.cadastrarCandidato(this.formulario.value).subscribe(response => console.log(response));
  }

  ngOnInit(): void {
  }

}
