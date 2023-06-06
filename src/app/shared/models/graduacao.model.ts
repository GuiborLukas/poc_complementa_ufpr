import { Competencia } from "./competencia.model";

export class Graduacao {
  public id!: number;
  public nome: string = "";
  public competencias!: Competencia[];

  constructor(id?: number, nome?: string, competencias?: Competencia[]) {
    if (id) this.id = id;
    if (nome) this.nome = nome;
    if (competencias) this.competencias = competencias;
  }
}
