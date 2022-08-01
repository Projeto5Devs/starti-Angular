import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-vagas',
  templateUrl: './lista-vagas.component.html',
  styleUrls: ['./lista-vagas.component.css']
})
export class ListaVagasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    document.getElementById ("footer").style.display = "revert";
    document.querySelector("nav").style.display = "revert";
    document.querySelector("body").style.cssText ="revert"

  }

}
