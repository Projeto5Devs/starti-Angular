import { ListaVagasService } from './lista-vagas.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/user/user.service';
import { Usuario } from 'src/app/user/usuario';
import { Observable } from 'rxjs';
import {Location} from '@angular/common';
import { InscricaoService } from '../inscricao/inscricao.service';
import { CandidatoService } from 'src/app/candidato/service/candidato.service';


@Component({
  selector: 'app-lista-vagas',
  templateUrl: './lista-vagas.component.html',
  styleUrls: ['./lista-vagas.component.css']
})
export class ListaVagasComponent  {

  form: FormGroup;
  vagas: []
  currentIndex = -1;
  tab: number
  user$: Observable<Usuario>
  roles: string[]
  id: number
  idPessoaFisica: number

  public responsiveLayout = false

  constructor(private listaVagas: ListaVagasService, private formBuilder: FormBuilder, private userService:UserService, private _location: Location, private inscricao :InscricaoService, private candidato: CandidatoService) {
    this.form = this.formBuilder.group({
      vagas: ['']
    });


    this.user$ = userService.retornaUsuario()
    this.roles = userService.getRoles()
    this.id = userService.getId()

    this.candidato.consultarPorId(this.id).subscribe((data) => {
      this.idPessoaFisica = data['idPessoaFisica']
    })

    const observable = this.listaVagas.getEmbedded()
    observable.subscribe( vagas => {
    this.vagas =  vagas._embedded.vagaVOList;
    } ); //busca dados se tiver subscribe

  }

  expand(index) {
    if(this.currentIndex === index) {
      this.currentIndex = null;
      return;
    }
    this.currentIndex = index;
  }

  voltar() {
    this._location.back();
  }

  inscreverVaga(idVaga:number){


    console.log(this.idPessoaFisica)

    this.inscricao.inscrever(
      { pessoafisica: {
         idPessoaFisica: this.idPessoaFisica
        },
        vaga: {
          id: idVaga,
        },
      dataInscricao: "2022-12-12"}
      ).subscribe()
  }
}
