import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioModule } from './usuario/usuario.module';
import { AlunoModule } from './aluno/aluno.module';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';
import { AdminModule } from './admin/admin.module';
import { CardsModule } from './cards/cards.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsuarioModule,
    AlunoModule,
    AuthModule,
    PagesModule,
    AdminModule,
    CardsModule,
    LayoutModule
  ],
  exports:[
    UsuarioModule,
    AlunoModule,
    AuthModule,
    PagesModule,
    AdminModule,
    CardsModule,
    LayoutModule
  ]
})
export class ComponentsModule { }
