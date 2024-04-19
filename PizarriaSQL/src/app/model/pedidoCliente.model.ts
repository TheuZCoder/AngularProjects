
export interface PedidoCliente {
  id_pedido: number;
  data_pedido: Date;
  status_pedido: string;
  nome_pedido: string;
  id_cliente: number;
  id_pizza: number[];
  nome_cliente?: string;
  nome_pizza?: string;
  preco_pizza?: string;
}

export interface id_pizza {
  id_pizza: number;
  nome_pizza: string;
  preco_pizza: number;
}
