import { AuthGuard } from './auth/auth.guard';
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

  {path: 'signin',
   component: LoginComponent,
    canActivate: [AuthGuard]},
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then((m) => m.CadastroModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'candidato',
    loadChildren: () => import('./candidato/candidato.module').then((m) => m.CandidatoModule)
  },
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
