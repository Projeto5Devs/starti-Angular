import { ListaVagasComponent } from './lista-vagas/lista-vagas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroVagasComponent } from './cadastro-vagas/cadastro-vagas.component';
import { EditarVagasComponent } from './editar-vagas/editar-vagas.component';

const routes: Routes = [
  {
    path: '',
    component: ListaVagasComponent
  },
  {
    path: 'cadastrarvaga',
    component: CadastroVagasComponent
  },
  {
    path: 'editarvaga/:id',
    component: EditarVagasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VagasRoutingModule { }
