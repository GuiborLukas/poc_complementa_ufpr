export class Competencia {
    private _id!: number;
    private _nome: string = "";
  
    constructor(id?: number, nome?: string) {
      if (id) this._id = id;
      if (nome) this._nome = nome;
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
  }
  