import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente.model';
import { Pedido } from 'src/app/model/pedido.model';
import { Produto } from 'src/app/model/pizza.model';
import { CarrinhoService } from 'src/app/service/carrinho.service';
import { LoginClienteService } from 'src/app/service/login-cliente.service';
import { PedidoService } from 'src/app/service/pedido.service';

@Component({
  selector: 'app-compra-produto',
  templateUrl: './compra-produto.component.html',
  styleUrls: ['./compra-produto.component.css'],
})
export class CompraProdutoComponent implements OnInit {
  clienteLogado: Cliente | null = null;
  produtosCarrinho: Produto[] = [];
  totalCompra: number = 0;

  constructor(
    private carrinhoService: CarrinhoService,
    private loginClienteService: LoginClienteService,
    private pedidoService: PedidoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.produtosCarrinho = this.carrinhoService.getProdutosCarrinho();

    this.loginClienteService.getClienteLogado().subscribe({
      next: (cliente: Cliente | null) => {
        this.clienteLogado = cliente;
      },
      error: (error) => {
        console.error('Erro ao obter cliente logado:', error);
      },
    });
    this.produtosCarrinho = this.carrinhoService.getProdutosCarrinho();
    this.calcularTotalCompra();
  }

  calcularTotalCompra(): void {
    this.totalCompra = this.produtosCarrinho.reduce(
      (total, produto) => total + produto.preco_pizza,
      0
    );
  }

  finalizarCompra(): void {
   
    console.log('Compra finalizada!');
  
    const pedido: Pedido = {
      id_cliente: this.clienteLogado?.id_cliente || 0, 
      id_pedido: 0, 
      data_pedido: new Date(), 
      status_pedido: 'Em processamento', 
      nome_pedido: 'Pedido do Cliente', 
      id_pizza: this.produtosCarrinho.map((produto) => produto.id_pizza), 
    };
  
    // Chamar o serviço para adicionar o pedido
    this.pedidoService.adicionarPedido(pedido).subscribe({
      next: (pedidoAdicionado) => {
        console.log('Pedido adicionado:', pedidoAdicionado);
        this.carrinhoService.limparCarrinho();
        alert('          Pedido em Preparo!! \n          Obrigado pela preferencia!!')
        this.router.navigate([''])
      },
      error: (error) => {
        console.error('Erro ao adicionar pedido:', error);
      },
    });
  }
}
