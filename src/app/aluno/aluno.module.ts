import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { HomeAlunoComponent } from './home-aluno/home-aluno.component';




@NgModule({
  declarations: [
    AutocadastroComponent,
    HomeAlunoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AlunoModule { }
