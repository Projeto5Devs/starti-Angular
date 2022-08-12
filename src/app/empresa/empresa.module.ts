import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { PerfilComponent } from './perfil/perfil.component';


@NgModule({
  declarations: [
    EditarPerfilComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    FormsModule
  ]
})
export class EmpresaModule { }
