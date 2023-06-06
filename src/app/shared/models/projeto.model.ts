import { Aluno } from "./aluno.model";
import { Monitor } from "./monitor.model";
import { Orientador } from "./orientador.model";

export class Projeto {
  private _id?: number;
  private _nome: string = "";
  private _descricao: string = "";
  private _orientador?: Orientador;
  private _alunos?: Aluno[];
  private _monitores?: Monitor[];

  constructor(
    id?: number,
    nome?: string,
    descricao?: string,
    orientador?: Orientador,
    alunos?: Aluno[],
    monitores?: Monitor[]
  ) {
    if (id) this._id = id;
    if (nome) this._nome = nome;
    if (descricao) this._descricao = descricao;
    if (orientador) this._orientador = orientador;
    if (alunos) this._alunos = alunos;
    if (monitores) this._monitores = monitores;
  }

  get id(): number | undefined {
    return this._id;
  }

  set id(id: number | undefined) {
    this._id = id;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(nome: string) {
    this._nome = nome;
  }

  get descricao(): string {
    return this._descricao;
  }

  set descricao(descricao: string) {
    this._descricao = descricao;
  }

  get orientador(): Orientador | undefined {
    return this._orientador;
  }

  set orientador(orientador: Orientador | undefined) {
    this._orientador = orientador;
  }

  get alunos(): Aluno[] | undefined {
    return this._alunos;
  }

  set alunos(alunos: Aluno[] | undefined) {
    this._alunos = alunos;
  }

  get monitores(): Monitor[] | undefined {
    return this._monitores;
  }

  set monitores(monitores: Monitor[] | undefined) {
    this._monitores = monitores;
  }
}
