import { Competencia } from "./competencia.model";

export class Graduacao {
  private _id!: number;
  private _nome: string = "";
  private _competencias!: Competencia[];

  constructor(id?: number, nome?: string, competencias?: Competencia[]) {
    if (id) this._id = id;
    if (nome) this._nome = nome;
    if (competencias) this._competencias = competencias;
  }

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(nome: string) {
    this._nome = nome;
  }

  get competencias(): Competencia[] {
    return this._competencias;
  }

  set competencias(competencias: Competencia[]) {
    this._competencias = competencias;
  }
}
