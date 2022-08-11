import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatoRoutingModule } from './candidato-routing.module';
import { PerfilComponent } from './perfil/perfil.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PerfilComponent,
    EditarPerfilComponent
  ],
  imports: [
    CommonModule,
    CandidatoRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class CandidatoModule { }
