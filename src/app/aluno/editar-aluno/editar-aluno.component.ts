import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as bcrypt from 'bcryptjs';
import { Aluno } from 'src/app/shared';
import { AlunoService } from '../services/aluno.service';

@Component({
  selector: 'app-editar-aluno',
  templateUrl: './editar-aluno.component.html',
  styleUrls: ['./editar-aluno.component.css']
})
export class EditarAlunoComponent {

  @ViewChild('formAluno') formAluno!: NgForm;

  aluno!: Aluno;

  senhaAtual: string = '';
  senha: string = '';
  confirmarSenha: string = '';
  senhaValida: boolean = false;
  mostrarSenhaAtual: boolean = false;
  mostrarSenha: boolean = false;
  mostrarConfirmarSenha: boolean = false;
  grrValido: boolean = true;
  senhaCorreta: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunoService: AlunoService
  ) {
  }

  ngOnInit(): void {
    // snapshot.params de ActivatedRoute dá acesso aos parâmetros passados
    // Operador + (antes do this) converte para número
    let id = +this.route.snapshot.params['id'];
    // Com o id, obtém a pessoa
    const res = this.alunoService.buscarAlunoPorId(id);
    if (res !== undefined)
      this.aluno = res;
    else
      throw new Error("Pessoa não encontrada: id = " + id);
  }

  atualizar(): void {
    if (this.formAluno.form.valid) {
      if (this.senha !== '' || this.confirmarSenha !== '' || this.senhaAtual !== '') {
        if (confirm(`Deseja realmente atualizar sua senha?`)) {
          this.validaSenhaAtual();
          if (this.senhaCorreta) {
            const hash = bcrypt.hashSync(this.senha, 10);
            this.aluno.senha = hash;
          }
        }
      }
      
      this.alunoService.atualizarAluno(this.aluno);
      this.router.navigate(["/admin/home"]);
    }
  }

  validaSenhaAtual() {
    const hash = bcrypt.hashSync(this.senhaAtual, 10);
    const isSenhaAtualCorreta = bcrypt.compareSync(this.aluno.senha, hash);

    this.senhaCorreta = isSenhaAtualCorreta;
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
