import { Usuario } from "./usuario.model";

export class Servidor extends Usuario {
  private _matricula: string = "";

  constructor(
    id?: number,
    nome?: string,
    email?: string,
    telefone?: string,
    senha?: string,
    matricula?: string
  ) {
    super(id, nome, email, telefone, senha);
    if (matricula) this._matricula = matricula;
  }

  get matricula(): string {
    return this._matricula;
  }

  set matricula(matricula: string) {
    this._matricula = matricula;
  }
}