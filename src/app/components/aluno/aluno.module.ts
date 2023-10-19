import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { HomeAlunoComponent } from './home-aluno/home-aluno.component';
import { AlunoService } from './services/aluno.service';
import { NgxMaskModule } from 'ngx-mask';
import { EditarAlunoComponent } from './editar-aluno/editar-aluno.component';
import { MatIconModule} from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';


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
    MatIconModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [
    AutocadastroComponent
  ],
  providers: [
    AlunoService
  ]
})
export class AlunoModule { }
