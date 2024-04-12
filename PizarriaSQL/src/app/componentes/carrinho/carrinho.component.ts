import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/model/pizza.model';
import { CarrinhoService } from 'src/app/servico/carrinho.service';
import { PizzaService } from 'src/app/servico/pizza.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
  produtos: Produto[] = [];
  carrinho: Produto[] = [];

  constructor(private pizzaService: PizzaService, public carrinhoService: CarrinhoService, private router: Router) { }

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
    const usuarioLogado = this.verificarUsuarioLogado();

    if (usuarioLogado) {
      // Lógica para realizar a compra
      this.efetuarCompra();
    } else {
      // Redirecionar para a tela de login
      this.router.navigate(['/login']);
    }
  }

  verificarUsuarioLogado(): boolean {
    // Lógica para verificar se o usuário está logado
    // Aqui você pode usar o serviço de autenticação ou qualquer outra forma de verificação
    return true; // Exemplo: sempre retornando verdadeiro para simular o usuário logado
  }

  efetuarCompra(): void {
    // Lógica para efetuar a compra
  }
}
