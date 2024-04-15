export class Cliente {
    id_cliente: number;
    nome_cliente: string;
    email_cliente: string;
    endereco_cliente: string;
    telefone_cliente: string;
    senha_cliente: string;

    constructor(id: number, nome: string = '', email: string = '', endereco: string = '', telefone: string = '', senha: string = '') {
        this.id_cliente =id;
        this.nome_cliente = nome;
        this.email_cliente = email;
        this.endereco_cliente = endereco;
        this.telefone_cliente = telefone;
        this.senha_cliente = senha;
    }
}
