import { Competencia } from "./competencia.model";
import { Complexidade } from "./complexidade.model";

export class Atividade {
  public id!: number;
  public nome: string = "";
  public dataCriacao: Date = new Date();
  public dataLimiteCandidatura: Date = new Date();
  public dataContestacao: Date = new Date();
  public dataConclusao: Date = new Date();
  public competencia!: Competencia;
  public complexidade!: Complexidade;

  constructor(
    id?: number,
    nome?: string,
    dataCriacao?: Date,
    dataLimiteCandidatura?: Date,
    dataContestacao?: Date,
    dataConclusao?: Date,
    competencia?: Competencia,
    complexidade?: Complexidade
  ) {
    if (id) this.id = id;
    if (nome) this.nome = nome;
    if (dataCriacao) this.dataCriacao = dataCriacao;
    if (dataLimiteCandidatura) this.dataLimiteCandidatura = dataLimiteCandidatura;
    if (dataContestacao) this.dataContestacao = dataContestacao;
    if (dataConclusao) this.dataConclusao = dataConclusao;
    if (competencia) this.competencia = new Competencia();
    if (complexidade) this.complexidade = new Complexidade();

  }

}