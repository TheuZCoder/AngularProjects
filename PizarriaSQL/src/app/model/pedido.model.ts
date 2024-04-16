export interface Pedido {
  id_pedido: number;
  data_pedido: Date;
  status_pedido: string;
  nome_pedido: string;
  id_cliente: number;
  id_produto: number[];
}
