import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';
import { Locacao } from 'src/app/models/locacao.model';

@Component({
  selector: 'app-editar-aluguel',
  templateUrl: './editar-aluguel.component.html',
  styleUrls: ['./editar-aluguel.component.css'],
})
export class EditarAluguelComponent implements OnInit {
  aluguel: Locacao | undefined; // Alterado para permitir valor indefinido
  nomeCarro: string = '';
  valorTotal: number = 0;

  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.clienteService.getAluguelById(id).subscribe(
        (aluguel: Locacao) => {
          this.aluguel = aluguel;
          // Obter nome do carro e calcular valor total
          this.clienteService.getCarroById(aluguel.id_carro).subscribe(
            (carro) => {
              this.nomeCarro = carro.modelo_carro;
              this.calcularValorTotal();
            },
            (error) => {
              console.error('Erro ao buscar carro:', error);
            }
          );
        },
        (error) => {
          console.error('Erro ao buscar aluguel:', error);
        }
      );
    });
  }

  calcularValorTotal(): void {
    if (this.aluguel) {
      const diffTime = Math.abs(
        this.aluguel.data_devolucao.getTime() -
          this.aluguel.data_locacao.getTime()
      );
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const precoDiario = 50; // Preço diário fictício para cálculo
      this.valorTotal = diffDays * precoDiario;
    }
  }

  onSubmit(): void {
    if (this.aluguel) {
      this.clienteService
        .updateAluguel(this.aluguel.id_locacao, this.aluguel)
        .subscribe(
          () => {
            this.router.navigate(['/meuAluguel']);
          },
          (error) => {
            console.error('Erro ao atualizar aluguel:', error);
          }
        );
    }
  }

  voltarPagina(): void {
    this.router.navigate(['/meuAluguel']);
  }
}
