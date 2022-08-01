import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';
import { CadastroCandidatoComponent } from './cadastro-candidato/cadastro-candidato.component';
import { EscolhaCadastroComponent } from './escolha-cadastro/escolha-cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CadastroEmpresaComponent,
    CadastroCandidatoComponent,
    EscolhaCadastroComponent
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CadastroModule { }
