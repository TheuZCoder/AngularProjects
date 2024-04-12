import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/pizza.model';
import { PizzaService } from 'src/app/servico/pizza.service';

@Component({
  selector: 'app-editar-pizzas',
  templateUrl: './editar-pizzas.component.html',
  styleUrls: ['./editar-pizzas.component.css']
})
export class EditarPizzasComponent implements OnInit {
  produto: Produto = new Produto(0, '', '', '', 0); // Instância vazia da classe Produto para o formulário
  mensagem: string = ''; // Mensagem para exibir após a edição

  constructor(
    private pizzaService: PizzaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Capturar o ID da pizza da URL usando o ActivatedRoute
    this.route.params.subscribe(params => {
      const id = +params['id']; // '+' converte o parâmetro para número, se necessário
      // Chamar o método para buscar os dados da pizza por ID e preencher o formulário
      this.getPizzaPorId(id);
    });
  }

  getPizzaPorId(id: number): void {
    this.pizzaService.getPizzaPorId(id).subscribe(
      pizza => {
        this.produto = pizza;
      },
      error => {
        console.error('Erro ao buscar pizza:', error);
      }
    );
  }

  salvarEdicao(): void {
    this.pizzaService.editarPizza(this.produto).subscribe(
      (response) => {
        console.log('Pizza editada com sucesso:', response);
        this.mensagem = 'Pizza editada com sucesso!';
        this.router.navigate(['cadastroPizzas']);
      },
      (error) => {
        console.error('Erro ao editar pizza:', error);
        this.mensagem = 'Erro ao editar pizza. Por favor, tente novamente.';
      }
    );
  }
}
