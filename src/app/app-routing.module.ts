import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAlunoComponent } from './aluno/home-aluno/home-aluno.component';
import { AutocadastroComponent } from './aluno/autocadastro/autocadastro.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'aluno',
    pathMatch: 'full'
  },
  {
    path: 'aluno',
    redirectTo: 'aluno/home'
  },
  {
    path: 'aluno/home',
    component: HomeAlunoComponent
  },
  {
    path: 'autocadastro',
    component: AutocadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
