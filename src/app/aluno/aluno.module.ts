import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { HomeAlunoComponent } from './home-aluno/home-aluno.component';
import { AlunoService } from './services/aluno.service';
import { NgxMaskModule } from 'ngx-mask';
import { EditarAlunoComponent } from './editar-aluno/editar-aluno.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

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
    NgxMaskModule.forRoot(),
    MatDialogModule,
    MatButtonModule
  ],
  providers: [
    AlunoService
  ]
})
export class AlunoModule { }
