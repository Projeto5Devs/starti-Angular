import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CadastroCandidatoComponent } from './cadastro-candidato/cadastro-candidato.component';
import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';
import { EscolhaCadastroComponent } from './escolha-cadastro/escolha-cadastro.component';
import { ErrorComponent } from '../error/error/error.component';

const routes: Routes = [
  {path: '', component: EscolhaCadastroComponent},
  {path: 'empresa', component: CadastroEmpresaComponent},
  {path: 'candidato', component: CadastroCandidatoComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
