import { Component } from '@angular/core';
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

  constructor(private pizzaService: PizzaService, public carrinhoService: CarrinhoService) { }

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

  removerDoCarrinho(index: number): void {
    this.carrinhoService.removerDoCarrinho(index);
  }
}
