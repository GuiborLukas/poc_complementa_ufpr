import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsuarioService } from './services/usuario.service';
import { HomeUsuarioComponent } from './home-usuario/home-usuario.component';

@NgModule({
  declarations: [
    HomeUsuarioComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    UsuarioService
  ]
})
export class UsuarioModule { }
