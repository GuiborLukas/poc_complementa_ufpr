export class Complexidade {
    private _id!: number;
    private _nome: string = "";
    private _cargaHorariaMinima!: number;
    private _cargaHorariaMaxima!: number;
  
    constructor(
        id?: number,
        nome?: string,
        cargaHorariaMinima?: number,
        cargaHorariaMaxima?: number
      ) {
        if (id) this._id = id;
        if (nome) this._nome = nome;
        if (cargaHorariaMinima) this._cargaHorariaMinima = cargaHorariaMinima;
        if (cargaHorariaMaxima) this._cargaHorariaMaxima = cargaHorariaMaxima;
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
  
    get cargaHorariaMinima(): number {
      return this._cargaHorariaMinima;
    }
  
    set cargaHorariaMinima(cargaHorariaMinima: number) {
      this._cargaHorariaMinima = cargaHorariaMinima;
    }
  
    get cargaHorariaMaxima(): number {
      return this._cargaHorariaMaxima;
    }
  
}