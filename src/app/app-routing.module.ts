import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAlunoComponent } from './components/aluno/home-aluno/home-aluno.component';
import { AutocadastroComponent } from './components/aluno/autocadastro/autocadastro.component';
import { HomeUsuarioComponent } from './components/usuario/home-usuario/home-usuario.component';
import { EditarAlunoComponent } from './components/aluno/editar-aluno/editar-aluno.component';
import { LoginRoutes } from './components/auth/auth-routing.module';
import { DashAdminComponent } from './components/admin/dash-admin/dash-admin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
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
    path: 'admin',
    component: HomeUsuarioComponent
  },
  {
    path: 'admin/home',
    component: HomeUsuarioComponent
  },
  {
    path: 'dashAdmin', component: DashAdminComponent
  },
  ...LoginRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
