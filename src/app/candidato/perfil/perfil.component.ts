import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { NavbarService } from 'src/app/template/navbar/navbar.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private _location: Location, public nav: NavbarService) { }

  ngOnInit(): void {
    this.nav.hide();
    
  }

  voltar() {
    this._location.back();
    this.nav.show()
  }

}
