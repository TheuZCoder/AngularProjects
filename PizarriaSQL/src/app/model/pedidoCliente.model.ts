
export interface PedidoCliente {
  id_pedido: number;
  data_pedido: Date;
  status_pedido: string;
  nome_pedido: string;
  id_cliente: number;
  id_pizza: number[];
  nome_cliente?: string;
  nome_pizzas?: string[]; // Array de nomes de pizzas
  precos_pizzas?: number[]; // Array de preços de pizzas
  total_preco_pizzas?: number;
}

