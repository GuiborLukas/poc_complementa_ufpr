import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/shared/models/aluno.model';
import * as bcrypt from 'bcryptjs';

import { AlunoService } from '../services/aluno.service';

@Component({
  selector: 'app-autocadastro',
  templateUrl: './autocadastro.component.html',
  styleUrls: ['./autocadastro.component.css']
})
export class AutocadastroComponent implements OnInit {

  @ViewChild('formAluno') formAluno!: NgForm;

  aluno!: Aluno;

  senha: string = '';
  confirmarSenha: string = '';
  senhaValida: boolean = false;
  mostrarSenha: boolean = false;
  grrValido: boolean = true;

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
      const hash = bcrypt.hashSync(this.senha, 10);
      this.aluno.senha = hash;
      // Verificar se o e-mail já está cadastrado
      const alunoExistente = this.alunoService.buscarAlunoPorEmail(this.aluno.email);
      if (alunoExistente) {
        // E-mail já cadastrado, exiba uma mensagem de erro ou realize a ação necessária
        console.log('E-mail já cadastrado.');
        return;
      }
      this.alunoService.inserirAluno(this.aluno);
      this.router.navigate([""]);
    }
  }

  verificarSenha() {
    // Verificar se a senha atende às condições específicas
    const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,16}$/;

    if (
      senhaRegex.test(this.senha) &&
      this.senha === this.confirmarSenha
    ) {
      this.senhaValida = true;
    } else {
      this.senhaValida = false;
    }
  }

  validarGRR() {
    const regex = /^[0-9]*$/;
    this.grrValido = regex.test(this.aluno.grr);
  }

}
