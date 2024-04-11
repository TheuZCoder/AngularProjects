import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../../servico/pizza.service';
import { Produto } from '../../model/pizza.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-pizzas',
  templateUrl: './cadastro-pizzas.component.html',
  styleUrls: ['./cadastro-pizzas.component.css'],
})
export class CadastroPizzasComponent implements OnInit {
  produtosAll: Produto[] = [];
  produto: Produto = new Produto(0, '', '', '', 0); // Instância vazia da classe Pizza para o formulário
  mensagem: string = ''; // Mensagem para exibir após o cadastro
 

  constructor(private pizzaService: PizzaService, private router: Router) { }

  ngOnInit(): void {
    this.getPizzas();
  }

  getPizzas(): void {
    this.pizzaService.getPizzas().subscribe(produtos => {
      this.produtosAll = produtos;
    });
  }
  cadastrarPizza(): void {
    this.pizzaService.cadastrarPizza(this.produto).subscribe(
      (response) => {
        console.log('Pizza cadastrada com sucesso:', response);
        this.mensagem = 'Pizza cadastrada com sucesso!';
        // Limpar os campos do formulário após o cadastro
        this.produto = new Produto(0, '', '', '', 0);
        this.getPizzas();
      },
      (error) => {
        console.error('Erro ao cadastrar pizza:', error);
        this.mensagem = 'Erro ao cadastrar pizza. Por favor, tente novamente.';
      }
    );
  }
  excluirPizza(id: number): void {
    this.pizzaService.excluirPizza(id).subscribe(
      (response) => {
        console.log('Pizza excluída com sucesso:', response);
        // Atualizar a lista de pizzas após a exclusão
        this.getPizzas();
      },
      (error) => {
        console.error('Erro ao excluir pizza:', error);
        if (error.status === 403) {
          this.mensagem = 'Acesso proibido. Verifique suas permissões.';
        } else {
          this.mensagem = 'Erro ao excluir pizza. Por favor, tente novamente.';
        }
      }
    );
  }
  editarPizza(pizza: Produto): void {
    this.router.navigate(['editarPizzas', pizza.id_pizza]);
  }

 
}
