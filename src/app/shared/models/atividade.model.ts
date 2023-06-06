import { Competencia } from "./competencia.model";
import { Complexidade } from "./complexidade.model";

export class Atividade {
    private _id!: number;
    private _nome: string = "";
    private _dataCriacao: Date = new Date();
    private _dataLimiteCandidatura: Date = new Date();
    private _dataContestacao: Date = new Date();
    private _dataConclusao: Date = new Date();
    private _competencia!: Competencia;
    private _complexidade!: Complexidade;
  
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
      if (id) this._id = id;
      if (nome) this._nome = nome;
      if (dataCriacao) this._dataCriacao = dataCriacao;
      if (dataLimiteCandidatura) this._dataLimiteCandidatura = dataLimiteCandidatura;
      if (dataContestacao) this._dataContestacao = dataContestacao;
      if (dataConclusao) this._dataConclusao = dataConclusao;
      if (competencia) this._competencia = new Competencia();
      if (complexidade) this._complexidade = new Complexidade();

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
  
    get dataCriacao(): Date {
      return this._dataCriacao;
    }
  
    set dataCriacao(dataCriacao: Date) {
      this._dataCriacao = dataCriacao;
    }
  
    get dataLimiteCandidatura(): Date {
      return this._dataLimiteCandidatura;
    }
  
    set dataLimiteCandidatura(dataLimiteCandidatura: Date) {
      this._dataLimiteCandidatura = dataLimiteCandidatura;
    }
  
    get dataContestacao(): Date {
      return this._dataContestacao;
    }
  
    set dataContestacao(dataContestacao: Date) {
      this._dataContestacao = dataContestacao;
    }
  
    get dataConclusao(): Date {
      return this._dataConclusao;
    }
  
    set dataConclusao(dataConclusao: Date) {
      this._dataConclusao = dataConclusao;
    }

    get competencia(): Competencia {
      return this._competencia;
    }
  
    set competencia(competencia: Competencia) {
      this._competencia = competencia;
    }
  
    get complexidade(): Complexidade {
      return this._complexidade;
    }
  
    set complexidade(complexidade: Complexidade) {
      this._complexidade = complexidade;
    }
  }