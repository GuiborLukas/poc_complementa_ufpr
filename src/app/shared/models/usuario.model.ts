import { Papel } from "./papel.enum";

export class Usuario {
    public id!: number;
    public nome: string = "";
    public email: string = "";
    public telefone: string = "";
    public senha: string = "";
    public papel!: Papel;

    constructor(
        id?: number,
        nome?: string,
        email?: string,
        telefone?: string,
        senha?: string,
        papel?: Papel) {
        if(id) this.id = id;
        if(nome) this.nome = nome;
        if(email) this.email = email;
        if(telefone) this.telefone = telefone;
        if(senha) this.senha = senha;
        if(papel) this.papel = papel;
    }
}