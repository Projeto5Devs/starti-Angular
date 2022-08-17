import { EmpresaService } from './../empresa.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarService } from 'src/app/template/navbar/navbar.service';
import {Location} from '@angular/common';
import { ListaVagasService } from 'src/app/vagas/lista-vagas/lista-vagas.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  deleteModalRef: BsModalRef;
  @ViewChild('deletarModal') deletarModal;
  form: FormGroup;
  idUser: number;
  idEmpresa: number;
  vagas: any
  idVagaDeletar: number

  constructor(public nav: NavbarService, private _location: Location, public vagasService: ListaVagasService, private formBuilder: FormBuilder, private userService:UserService, private empresa: EmpresaService, private router: Router,private modalService: BsModalService) {
    this.form = this.formBuilder.group({
      vagas: ['']
    });

    this.idUser = userService.getId()
    this.empresa.consultarPorId(this.idUser).subscribe((data) => {
      this.idEmpresa = data['idEmpresa']
      this.vagasService.buscarPorEmpresa(this.idEmpresa).subscribe(data =>{
        this.vagas = data
      }
     )
    })


  }

  ngOnInit(): void {
    document.getElementById("footer").style.display = "none";
    document.querySelector("nav").style.display = "none";
  }

  voltar() {
    this._location.back();
    this.nav.show()
  }

  editar(id:number){
    this.router.navigate(['/vagas/editarvaga',id]);
  }

  remover(id: number){
    this.deleteModalRef = this.modalService.show(this.deletarModal, {class: 'modal-sm'})
    this.idVagaDeletar = id
  }

  onConfirmDelete(){
    this.vagasService.deletarVaga(this.idVagaDeletar).subscribe((data)=>{
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
