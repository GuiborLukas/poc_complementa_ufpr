import { Graduacao } from "./graduacao.model";
import { Servidor } from "./servidor.model";

export class Orientador extends Servidor{

  public graduacao!: Graduacao;

    constructor(
        id?: number,
        nome?: string,
        email?: string,
        telefone?: string,
        senha?: string,
        matricula?: string,
        graduacao?: Graduacao
      ) {
        super(id, nome, email, telefone, senha, matricula);
        if (graduacao) this.graduacao = graduacao;
      }
}
