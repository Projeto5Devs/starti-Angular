import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/template/navbar/navbar.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(public nav: NavbarService, private _location: Location) { }

  ngOnInit(): void {
    document.getElementById("footer").style.display = "none";
    document.querySelector("nav").style.display = "none";
  }

  voltar() {
    this._location.back();
    this.nav.show()
  }

}
