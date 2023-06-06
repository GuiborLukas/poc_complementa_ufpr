import { Graduacao } from "./graduacao.model";
import { Usuario } from "./usuario.model";

export class Aluno extends Usuario {
  private _grr: string = "";
  private _graduacao!: Graduacao; 

  constructor(
    id?: number,
    nome?: string,
    email?: string,
    telefone?: string,
    senha?: string,
    grr?: string,
    graduacao?: Graduacao
  ) {
    super(id, nome, email, telefone, senha);
    if (grr) this._grr = grr;
    if (graduacao) this._graduacao = graduacao;
  }

  get grr(): string {
    return this._grr;
  }

  set grr(grr: string) {
    this._grr = grr;
  }

  get graduacao(): Graduacao {
    return this._graduacao;
  }

  set graduacao(graduacao: Graduacao) {
    this._graduacao = graduacao;
  }
}