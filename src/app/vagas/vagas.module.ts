import { MensagemModule } from './../componentes/mensagem/mensagem.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VagasRoutingModule } from './vagas-routing.module';
import { ListaVagasComponent } from './lista-vagas/lista-vagas.component';
import { CadastroVagasComponent } from './cadastro-vagas/cadastro-vagas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DateAgoExamplePipe } from '../pipes/date-ago-example.pipe';
import { CandidatoService } from '../candidato/service/candidato.service';
import { EditarVagasComponent } from './editar-vagas/editar-vagas.component';



@NgModule({
  declarations: [
    ListaVagasComponent,
    CadastroVagasComponent,
    DateAgoExamplePipe,
    EditarVagasComponent,
  ],
  imports: [
    CommonModule,
    VagasRoutingModule,
    ReactiveFormsModule,
    MensagemModule,
  ],
  providers: [CandidatoService]
})
export class VagasModule { }
