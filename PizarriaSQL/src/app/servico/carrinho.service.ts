import { Injectable } from '@angular/core';
import { Produto} from '../model/pizza.model';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  produtos: Produto[] = [];
  total: number = 0;
  mostrar: boolean = false;

  mostrarCarrinho(): void {
    this.mostrar = true;
  }

  ocultarCarrinho(): void {
    this.mostrar = false;
  }

  adicionarPizza(produto: Produto): void {
    this.produtos.push(produto);
    this.calcularTotal();
  }

  removerPizza(index: number): void {
    this.produtos.splice(index, 1);
    this.calcularTotal();
  }

  calcularTotal(): void {
    this.total = this.produtos.reduce(
      (acc, produtos) => acc + produtos.preco_pizza,
      0
    );
  }

  adicionarAoCarrinho(produto: Produto): void {
    this.adicionarPizza(produto);
  }

  removerDoCarrinho(index: number): void {
    this.removerPizza(index);
  }
}
