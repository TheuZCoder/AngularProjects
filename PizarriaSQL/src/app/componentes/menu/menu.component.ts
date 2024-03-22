import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from 'src/app/model/pizza.model';
import { PizzaService } from 'src/app/servico/pizza.service';
import { CarrinhoService } from 'src/app/servico/carrinho.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  produtos: Produto[] = [];
  carrinho: Produto[] = [];

  searchTerm: string = '';

  constructor(private pizzaService: PizzaService, private carrinhoService: CarrinhoService) { }

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

  search(e:Event): void{

    const target = e.target as HTMLInputElement
    const value = target.value

    this.produtos = this.produtos.filter(moment =>{
      return moment.nome_pizza.toLowerCase().includes(value);
    });
  }
}
