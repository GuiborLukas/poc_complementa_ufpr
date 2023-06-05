import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/shared/models/aluno.model';

import { AlunoService } from '../services/aluno.service';

@Component({
  selector: 'app-autocadastro',
  templateUrl: './autocadastro.component.html',
  styleUrls: ['./autocadastro.component.css']
})
export class AutocadastroComponent implements OnInit{

  @ViewChild('formAluno') formAluno!: NgForm;
  aluno!: Aluno;

  constructor(
    private router: Router,
    private alunoService: AlunoService
  ) {
  }

  ngOnInit(): void {
    this.aluno = new Aluno();
  }

  autocadastrar(): void {
    if (this.formAluno.form.valid) {
    }
  }

}
