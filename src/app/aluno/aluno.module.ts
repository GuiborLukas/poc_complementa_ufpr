import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { HomeAlunoComponent } from './home-aluno/home-aluno.component';
import { AlunoService } from './services/aluno.service';
import { NgxMaskModule } from 'ngx-mask';
import { EditarAlunoComponent } from './editar-aluno/editar-aluno.component';

@NgModule({
  declarations: [
    AutocadastroComponent,
    HomeAlunoComponent,
    EditarAlunoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    AlunoService
  ]
})
export class AlunoModule { }
