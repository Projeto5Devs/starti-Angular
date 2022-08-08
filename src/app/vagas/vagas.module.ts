import { MensagemModule } from './../componentes/mensagem/mensagem.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VagasRoutingModule } from './vagas-routing.module';
import { ListaVagasComponent } from './lista-vagas/lista-vagas.component';
import { CadastroVagasComponent } from './cadastro-vagas/cadastro-vagas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DateAgoExamplePipe } from '../pipes/date-ago-example.pipe';


@NgModule({
  declarations: [
    ListaVagasComponent,
    CadastroVagasComponent,
    DateAgoExamplePipe
  ],
  imports: [
    CommonModule,
    VagasRoutingModule,
    ReactiveFormsModule,
    MensagemModule
  ]
})
export class VagasModule { }
