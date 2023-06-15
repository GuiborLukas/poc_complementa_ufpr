import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Aluno, Graduacao } from 'src/app/shared';
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
  mostrarConfirmarSenha: boolean = false;
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
      this.aluno.senha = this.senha;
      this.aluno.papel = "aluno";
      this.alunoService.autocadastrarAluno(this.aluno);
      alert(`Um e-mail de confirmação foi enviado para ${this.aluno.email}`);
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
    const regex = /^20\d{6}$/;
    this.grrValido = regex.test(this.aluno.grr);
  }

}
