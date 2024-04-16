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
    private loginClienteService: LoginClienteService
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
    // Lógica para finalizar a compra
    console.log('Compra finalizada!');
    this.carrinhoService.limparCarrinho();
  }
}
