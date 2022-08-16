import { EmpresaService } from './../empresa.service';
import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/template/navbar/navbar.service';
import {Location} from '@angular/common';
import { ListaVagasService } from 'src/app/vagas/lista-vagas/lista-vagas.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  form: FormGroup;
  idUser: number;
  idEmpresa: number;
  vagas: any

  constructor(public nav: NavbarService, private _location: Location, public vagasService: ListaVagasService, private formBuilder: FormBuilder, private userService:UserService, private empresa: EmpresaService) {
    this.form = this.formBuilder.group({
      vagas: ['']
    });

    this.idUser = userService.getId()
    this.empresa.consultarPorId(this.idUser).subscribe((data) => {
      this.idEmpresa = data['idEmpresa']
      this.vagasService.buscarPorEmpresa(this.idEmpresa).subscribe(data =>{
        this.vagas = data
        console.log(data)
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

}
