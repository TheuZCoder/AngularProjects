export class Funcionario {
    id_funcionario?: number;
    nome_funcionario: string;
    email_funcionario: string;
    senha_funcionario: string;
    cargo_funcionario?: string;
    salario_funcionario?: number;
    data_contratacao?: Date;

    constructor(id_funcionario: number, nome_funcionario: string, email_funcionario: string, senha_funcionario: string, cargo_funcionario?: string, salario_funcionario?: number, data_contratacao?: Date) {
        this.id_funcionario = id_funcionario;
        this.nome_funcionario = nome_funcionario;
        this.email_funcionario = email_funcionario;
        this.senha_funcionario = senha_funcionario;
        this.cargo_funcionario = cargo_funcionario;
        this.salario_funcionario = salario_funcionario;
        this.data_contratacao = data_contratacao;
    }
}
