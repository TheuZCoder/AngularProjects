export class Cliente {
  id_cliente?: number;
  nome_cliente: string;
  endereco_cliente: string;
  cidade_cliente: string;
  estado_cliente: string;
  celular_cliente: string;
  email_cliente: string;
  senha_cliente: string;

  constructor(
    id_cliente: number,
    nome_cliente: string,
    endereco_cliente: string,
    cidade_cliente: string,
    estado_cliente: string,
    celular_cliente: string,
    email_cliente: string,
    senha_cliente: string
  ) {
    this.id_cliente = id_cliente;
    this.nome_cliente = nome_cliente;
    this.endereco_cliente = endereco_cliente;
    this.cidade_cliente = cidade_cliente;
    this.estado_cliente = estado_cliente;
    this.celular_cliente = celular_cliente;
    this.email_cliente = email_cliente;
    this.senha_cliente = senha_cliente;
  }
}
