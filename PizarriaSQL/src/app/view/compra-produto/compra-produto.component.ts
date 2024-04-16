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

  constructor(private loginClienteService: LoginClienteService) {}

  ngOnInit(): void {
    this.obterClienteLogado();
  }

  obterClienteLogado(): void {
    this.loginClienteService.getClienteLogado().subscribe(
      (cliente: Cliente | null) => {
        this.clienteLogado = cliente;
      },
      (error) => {
        console.error('Erro ao obter cliente logado:', error);
      }
    );
  }

  comprarProdutos(): void {
    // Lógica para comprar produtos com base no cliente logado
    if (this.clienteLogado) {
      console.log('Cliente logado:', this.clienteLogado);
      // Aqui você pode implementar a lógica para realizar a compra
    } else {
      console.warn('Nenhum cliente logado.');
    }
  }
}
