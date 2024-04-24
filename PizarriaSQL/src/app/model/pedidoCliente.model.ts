
export interface PedidoCliente {
  id_pedido: number;
  data_pedido: Date;
  status_pedido: string;
  nome_pedido: string;
  id_cliente: number;
  id_pizza: number[];
  nome_cliente?: string;
  nome_pizzas?: string[];
  precos_pizzas?: number[];
  total_preco_pizzas?: number;
}

