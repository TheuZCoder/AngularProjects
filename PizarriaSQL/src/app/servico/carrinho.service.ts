import { Injectable } from '@angular/core';
import { Produto, Carrinho } from '../model/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  carrinho: Carrinho = new Carrinho();

  adicionarAoCarrinho(produto: Produto): void {
    this.carrinho.adicionarPizza(produto);
  }

  removerDoCarrinho(index: number): void {
    this.carrinho.removerPizza(index);
  }
}
