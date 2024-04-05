import { Component } from '@angular/core';
import { PizzaService } from '../../servico/pizza.service';
import { Produto } from '../../model/pizza.model';

@Component({
  selector: 'app-cadastro-pizzas',
  templateUrl: './cadastro-pizzas.component.html',
  styleUrls: ['./cadastro-pizzas.component.css']
})
export class CadastroPizzasComponent {
  produto: Produto = new Produto(0,'', '', '', 0); // Instância vazia da classe Pizza para o formulário
  mensagem: string = ''; // Mensagem para exibir após o cadastro

  constructor(private PizzaService: PizzaService) {}

  cadastrarPizza(): void {
    this.PizzaService.cadastrarPizza(this.produto)
      .subscribe(
        response => {
          console.log('Pizza cadastrada com sucesso:', response);
          this.mensagem = 'Pizza cadastrada com sucesso!';
          // Limpar os campos do formulário após o cadastro
          this.produto = new Produto(0,'', '', '', 0);
        },
        error => {
          console.error('Erro ao cadastrar pizza:', error);
          this.mensagem = 'Erro ao cadastrar pizza. Por favor, tente novamente.';
        }
      );
  }
}
