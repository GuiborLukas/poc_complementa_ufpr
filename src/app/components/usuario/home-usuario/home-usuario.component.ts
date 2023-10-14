import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { AlunoService } from 'src/app/components/aluno/services/aluno.service';
import { Aluno } from 'src/app/shared';

@Component({
  selector: 'app-home-usuario',
  templateUrl: './home-usuario.component.html',
  styleUrls: ['./home-usuario.component.css']
})
export class HomeUsuarioComponent {

  alunos: Aluno[] = [];
  constructor(
    private alunoService : AlunoService,
    private route: ActivatedRoute) { }

  ngOnInit(): void{
    // this.alunos = this.listarTodosAlunos();
  }

  // listarTodosAlunos(): Aluno[] {
  //   return this.alunoService.listarTodosAlunos();
  // }

  removerAluno($event: any, aluno: Aluno): void {
  //   $event.preventDefault();
  //   if(confirm(`Deseja realmente remover o aluno ${aluno.nome}?`)){
  //     this.alunoService.removerAluno(aluno.id);
  //     this.alunos = this.listarTodosAlunos();
  //   }
  }

}
