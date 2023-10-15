import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioModule } from './usuario/usuario.module';
import { AlunoModule } from './aluno/aluno.module';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';
import { AdminModule } from './admin/admin.module';
import { CardsModule } from './cards/cards.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsuarioModule,
    AlunoModule,
    AuthModule,
    PagesModule,
    AdminModule,
    CardsModule
  ],
  exports:[
    UsuarioModule,
    AlunoModule,
    AuthModule,
    PagesModule,
    AdminModule,
    CardsModule
  ]
})
export class ComponentsModule { }
