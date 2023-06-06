import { Injectable } from '@angular/core';

import { Aluno } from 'src/app/shared/models/aluno.model';

const LS_CHAVE: string = "alunos"

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor() { }

  listarTodosAlunos(): Aluno[] {
    const alunos = localStorage[LS_CHAVE];
    return alunos ? JSON.parse(alunos) : [];
  }

  inserirAluno(aluno: Aluno): void {
    const alunos = this.listarTodosAlunos();

    aluno.id = new Date().getTime();
    alunos.push(aluno);
    localStorage[LS_CHAVE] = JSON.stringify(alunos);
  }

  buscarAlunoPorId(id: number): Aluno | undefined {
    const alunos = this.listarTodosAlunos();
    return alunos.find(aluno => aluno.id === id);
  }

  buscarAlunoPorEmail(email: string): Aluno | undefined {
    const alunos = this.listarTodosAlunos();
    return alunos.find(aluno => aluno.email === email);
  }

  atualizarAluno(aluno: Aluno): void {
    const alunos: Aluno[] = this.listarTodosAlunos();

    alunos.forEach((obj, index, objs) => {
      if (aluno.id === obj.id) {
        objs[index] = aluno;
      }
    });
  }

  removerAluno(id: number): void {
    let alunos: Aluno[] = this.listarTodosAlunos();
    alunos = alunos.filter(aluno => aluno.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(alunos);
  }
}
