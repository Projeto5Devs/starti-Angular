import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CadastroCandidatoComponent } from './cadastro-candidato/cadastro-candidato.component';
import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';
import { EscolhaCadastroComponent } from './escolha-cadastro/escolha-cadastro.component';

const routes: Routes = [
  {path: '', component: EscolhaCadastroComponent},
  {path: 'cadastro/empresa', component: CadastroEmpresaComponent},
  {path: 'cadastro/candidato', component: CadastroCandidatoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
