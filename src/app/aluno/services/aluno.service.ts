import { Injectable } from '@angular/core';

import { Aluno } from 'src/app/shared';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const LS_CHAVE: string = "alunos"

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  BASE_URL = "http://localhost:3000/alunos/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  public get alunoLogado(): Aluno {
    let alunoLogado = localStorage[LS_CHAVE];
    return alunoLogado ? JSON.parse(alunoLogado) : null;
  }

  public set alunoLogado(aluno: Aluno) {
    localStorage[LS_CHAVE] = JSON.stringify(aluno)
  }

  constructor(private httpClient: HttpClient) { }

  listarTodosAlunos(): Observable<Aluno[]> {
    return this.httpClient.get<Aluno[]>(this.BASE_URL, this.httpOptions);
  }

  inserirAluno(aluno: Aluno): Observable<Aluno> {
    return this.httpClient.post<Aluno>(this.BASE_URL, JSON.stringify(aluno), this.httpOptions);
  }

  autocadastrarAluno(aluno: Aluno): Observable<Aluno> {
    return this.httpClient.post<Aluno>(this.BASE_URL + 'autocadastro', JSON.stringify(aluno), this.httpOptions);
  }

  buscarAlunoPorId(id: number): Observable<Aluno> {
    return this.httpClient.get<Aluno>(this.BASE_URL + id, this.httpOptions);
  }

  atualizarAluno(aluno: Aluno): Observable<Aluno> {
    this.alunoLogado = aluno;
    return this.httpClient.put<Aluno>(this.BASE_URL + aluno.id, JSON.stringify(aluno), this.httpOptions);
  }

  removerAluno(id: number): Observable<Aluno> {
    return this.httpClient.delete<Aluno>(this.BASE_URL + id, this.httpOptions);
  }
}
