import { AlertModalService } from './../../componentes/alert-modal.service';
import { ListaVagasService } from './lista-vagas.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/user/user.service';
import { Usuario } from 'src/app/user/usuario';
import { Observable } from 'rxjs';
import {Location} from '@angular/common';
import { InscricaoService } from '../inscricao/inscricao.service';
import { CandidatoService } from 'src/app/candidato/service/candidato.service';
import { CadastroVagas } from '../cadastro-vagas/cadastro-vagas';


@Component({
  selector: 'app-lista-vagas',
  templateUrl: './lista-vagas.component.html',
  styleUrls: ['./lista-vagas.component.css']
})
export class ListaVagasComponent  {

  formularioCargo: FormGroup
  form: FormGroup;
  formulario: FormGroup
  vagas: []
  currentIndex = -1;
  tab: number
  user$: Observable<Usuario>
  roles: string[]
  id: number
  idPessoaFisica: number


  public responsiveLayout = false

  constructor(private listaVagas: ListaVagasService, private formBuilder: FormBuilder, private userService:UserService, private _location: Location, private inscricao :InscricaoService, private candidato: CandidatoService, private alertService: AlertModalService) {
    this.form = this.formBuilder.group({
      vagas: ['']
    });

    this.formulario = this.formBuilder.group({
      modalidade: [''],
      tipo:['']
    });

    this.formularioCargo = this.formBuilder.group({
      cargo: ['']
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

    this.inscricao.inscrever(
      { pessoafisica: {
         idPessoaFisica: this.idPessoaFisica
        },
        vaga: {
          id: idVaga,
        },
      dataInscricao: "2022-12-12"}
      ).subscribe(data => this.sucesso(), error => this.erro())
  }


  erro(){
    this.alertService.showAlertDanger('Erro ao fazer a inscrição. Tente Novamente.')
  }

  sucesso(){
    this.alertService.showAlertSuccess('Inscrição realizada com sucesso!')
  }

  filtrar(){
    const novaVaga = this.formulario.getRawValue() as CadastroVagas
    let tipo = novaVaga.tipo
    let modalidade = novaVaga.modalidade

    if(!tipo && modalidade){
      const observable = this.listaVagas.buscarPorModalidade(modalidade)
    observable.subscribe( vagas => {
      this.vagas = vagas._embedded.vagaVOList
      } );
    }

    if(tipo && !modalidade){
      const observable = this.listaVagas.buscarPorTipo(tipo)
    observable.subscribe( vagas => {
      this.vagas = vagas._embedded.vagaVOList
      } );
    }


    const observable = this.listaVagas.buscarPorTipoModalidade(tipo, novaVaga.modalidade)
    observable.subscribe( vagas => {
      this.vagas = vagas
      } );
  }

  limpar(){
    this.formulario.get('modalidade').reset();
    this.formulario.get('tipo').reset();
    this.formularioCargo.get('cargo').reset()
  }

  buscar(){
    const novaVaga = this.formularioCargo.getRawValue() as CadastroVagas

    const observable = this.listaVagas.buscarPorCargo(novaVaga.cargo)
    observable.subscribe(vagas => {
      this.vagas = vagas._embedded.vagaVOList
      } );
  }



}
