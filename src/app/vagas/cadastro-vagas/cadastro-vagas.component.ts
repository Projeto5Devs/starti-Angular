import { CadastroVagasService } from './cadastro-vagas.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroVagas } from './cadastro-vagas';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { NavbarService } from 'src/app/template/navbar/navbar.service';

@Component({
  selector: 'app-cadastro-vagas',
  templateUrl: './cadastro-vagas.component.html',
  styleUrls: ['./cadastro-vagas.component.css']
})
export class CadastroVagasComponent implements OnInit {

  novaVagaForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private cadastroVaga: CadastroVagasService, private router: Router, private _location: Location, public nav: NavbarService) { }

  ngOnInit(): void {
    this.novaVagaForm = this.formBuilder.group({
      empresa: [2],
      cargo: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      salario: [],
      tipo: [],
      modalidade: ['', [Validators.required]],
      prazo: ['', [Validators.required]]
    })
  }

  cadastrar(){

      const novaVaga = this.novaVagaForm.getRawValue() as CadastroVagas

      this.cadastroVaga.cadastrarNovaVaga(novaVaga).subscribe(()=>{this.router.navigate([''])}, (error)=> alert('Erro'))
  }

  voltar() {
    this._location.back();
    this.nav.show()
  }
}
