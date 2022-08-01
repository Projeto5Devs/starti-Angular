import { ListaVagasComponent } from './lista-vagas/lista-vagas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroVagasComponent } from './cadastro-vagas/cadastro-vagas.component';

const routes: Routes = [
  {
    path: '',
    component: ListaVagasComponent
  },
  {
    path: 'cadastrarvaga',
    component: CadastroVagasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VagasRoutingModule { }
