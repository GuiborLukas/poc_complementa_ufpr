import { Usuario } from "./usuario.model";

export class Servidor extends Usuario {
  public matricula: string = "";

  constructor(
    id?: number,
    nome?: string,
    email?: string,
    telefone?: string,
    senha?: string,
    matricula?: string
  ) {
    super(id, nome, email, telefone, senha);
    if (matricula) this.matricula = matricula;
  }
}