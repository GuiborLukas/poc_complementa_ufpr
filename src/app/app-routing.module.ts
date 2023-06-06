import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAlunoComponent } from './aluno/home-aluno/home-aluno.component';
import { AutocadastroComponent } from './aluno/autocadastro/autocadastro.component';
import { HomeUsuarioComponent } from './usuario/home-usuario/home-usuario.component';
import { EditarAlunoComponent } from './aluno/editar-aluno/editar-aluno.component';

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
    path: 'aluno/editar/:id',
    component: EditarAlunoComponent
  },
  {
    path: 'autocadastro',
    component: AutocadastroComponent
  },
  {
    path: 'admin/home',
    component: HomeUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
