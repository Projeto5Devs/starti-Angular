import { ErrorComponent } from './error/error/error.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {
    path:'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path:'vagas',
    loadChildren: () => import('./vagas/vagas.module').then((m) => m.VagasModule),
  },

  {path: 'signin', component: LoginComponent},
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then((m) => m.CadastroModule),
  },
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
