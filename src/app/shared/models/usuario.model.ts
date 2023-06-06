export class Usuario {
    private _id!: number;
    private _nome: string = "";
    private _email: string = "";
    private _telefone: string = "";
    private _senha: string = "";

    constructor(
        id?: number,
        nome?: string,
        email?: string,
        telefone?: string,
        senha?: string) {
        if(id) this._id = id;
        if(nome) this._nome = nome;
        if(email) this._email = email;
        if(telefone) this._telefone = telefone;
        if(senha) this._senha = senha;
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

    get email(): string {
        return this._email;
    }

    set email(email: string) {
        this._email = email;
    }

    get telefone(): string {
        return this._telefone;
    }

    set telefone(telefone: string) {
        this._telefone = telefone;
    }

    get senha(): string {
        return this._senha;
    }

    set senha(senha: string) {
        this._senha = senha;
    }
}