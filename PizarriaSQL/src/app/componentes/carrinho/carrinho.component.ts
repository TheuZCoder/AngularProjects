import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/model/pizza.model';
import { CarrinhoService } from 'src/app/servico/carrinho.service';
import { LoginClienteService } from 'src/app/servico/login-cliente.service';
import { PizzaService } from 'src/app/servico/pizza.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
  produtos: Produto[] = [];
  carrinho: Produto[] = [];

  constructor(private pizzaService: PizzaService, public carrinhoService: CarrinhoService, private router: Router, private LoginCliente: LoginClienteService) { }

  ngOnInit(): void {
    this.getPizzas();
  }

  getPizzas(): void {
    this.pizzaService.getPizzas()
      .subscribe(produtos => this.produtos = produtos);
  }

  adicionarAoCarrinho(produto: Produto): void {
    this.carrinhoService.adicionarAoCarrinho(produto);
    console.log('Pizza adicionada ao carrinho:', produto);
    this.mostrarCarrinho();
  }
  mostrarCarrinho(): void {
    this.carrinhoService.mostrarCarrinho();
  }
  ocultarCarrinho(): void {
    this.carrinhoService.ocultarCarrinho();
  }

  removerDoCarrinho(index: number): void {
    this.carrinhoService.removerDoCarrinho(index);
  }

  realizarCompra(): void {
    // Verificar se o usuário está logado
    const usuarioLogado = this.LoginCliente.isAuthenticated();

    if (usuarioLogado) {
      // Lógica para realizar a compra
      this.LoginCliente.isAuthenticated();
    } else {
      // Redirecionar para a tela de login
      this.router.navigate(['/loginCliente']);
    }
  }


}
