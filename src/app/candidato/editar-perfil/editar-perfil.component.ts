import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById("footer").style.display = "none";
    document.querySelector("nav").style.display = "none";
  }

}
