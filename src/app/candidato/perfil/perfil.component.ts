import { CandidatoService } from './../service/candidato.service';
import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { NavbarService } from 'src/app/template/navbar/navbar.service';
import { UserService } from 'src/app/user/user.service';
import { InscricaoService } from 'src/app/vagas/inscricao/inscricao.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  form: FormGroup;
  id: number
  idCandidato: number
  vagas: any

  constructor(private _location: Location, public nav: NavbarService, private userService:UserService, private inscricao :InscricaoService, private formBuilder: FormBuilder, private candidato: CandidatoService) {
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
    console.log(idVaga)
    this.inscricao.deletarPorIdVaga(idVaga).subscribe((data)=>{
      console.log("success");
 });
    window.location.reload()
  }

}
