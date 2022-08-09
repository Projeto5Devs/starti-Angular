import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatoRoutingModule } from './candidato-routing.module';
import { PerfilComponent } from './perfil/perfil.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';


@NgModule({
  declarations: [
    PerfilComponent,
    EditarPerfilComponent
  ],
  imports: [
    CommonModule,
    CandidatoRoutingModule
  ]
})
export class CandidatoModule { }
