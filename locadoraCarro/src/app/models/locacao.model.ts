export class Locacao {
  id_locacao: number;
  data_locacao: Date;
  valor_total: number;
  data_devolucao: Date;
  id_cliente: number;
  id_carro: number;
  nome_carro?: string;
  ano_carro?: number;

  constructor(id_locacao: number, data_locacao: Date, valor_total: number, data_devolucao: Date, id_cliente: number, id_carro: number, nome_carro?: string, ano_carro?: number) {
    this.id_locacao = id_locacao;
    this.data_locacao = data_locacao;
    this.valor_total = valor_total;
    this.data_devolucao = data_devolucao;
    this.id_cliente = id_cliente;
    this.id_carro = id_carro;
    this.nome_carro = nome_carro;
    this.ano_carro = ano_carro;
  }
}
