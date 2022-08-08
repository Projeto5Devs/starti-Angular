import { ListaVagasService } from './lista-vagas.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lista-vagas',
  templateUrl: './lista-vagas.component.html',
  styleUrls: ['./lista-vagas.component.css']
})
export class ListaVagasComponent  {

  form: FormGroup;
  vagas: []


  constructor(private listaVagas: ListaVagasService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      vagas: ['']
    });

    const observable = this.listaVagas.getEmbedded()
    observable.subscribe( vagas => {
    this.vagas =  vagas._embedded.vagaVOList;
      console.log(this.vagas)
    } ); //busca dados se tiver subscribe

  }


}
