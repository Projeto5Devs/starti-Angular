import { CandidatoService } from './../service/candidato.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {Location} from '@angular/common';
import { NavbarService } from 'src/app/template/navbar/navbar.service';
import { UserService } from 'src/app/user/user.service';
import { InscricaoService } from 'src/app/vagas/inscricao/inscricao.service';
import { FormBuilder, FormGroup } from '@angular/forms';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  deleteModalRef: BsModalRef;
  @ViewChild('deletarModal') deletarModal;
  form: FormGroup;
  id: number
  idCandidato: number
  vagas: any
  idVagaDeletar: number

  constructor(private _location: Location, public nav: NavbarService, private userService:UserService, private inscricao :InscricaoService, private formBuilder: FormBuilder, private candidato: CandidatoService, private modalService: BsModalService) {
    this.form = this.formBuilder.group({
      vagas: ['']
    });

    this.id = userService.getId()

    this.candidato.consultarPorId(this.id).subscribe((data) => {
      this.idCandidato = data['idPessoaFisica']
      this.inscricao.buscarPorCandidato(this.idCandidato).subscribe(data => this.vagas = data)
    })




   }

  ngOnInit(): void {
    this.nav.hide();
  }

  voltar() {
    this._location.back();
    this.nav.show()
  }

  remover(idVaga: number){
    this.deleteModalRef = this.modalService.show(this.deletarModal, {class: 'modal-sm'})
    this.idVagaDeletar = idVaga
  }

  onConfirmDelete(){
    this.inscricao.deletarPorIdVaga(this.idVagaDeletar).subscribe((data)=>{
      console.log("Inscrição removida com sucesso.");
    }, error => {
      console.log("Não foi possível remover a inscrição.");
    });
    window.location.reload()
  }

  onDeclineDelete(){
    this.deleteModalRef.hide()
  }

}
