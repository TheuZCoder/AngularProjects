import { Component } from '@angular/core';
import { AluguelService } from 'src/app/service/aluguel.service';

@Component({
  selector: 'app-receita-total',
  templateUrl: './receita-total.component.html',
  styleUrls: ['./receita-total.component.css'],
})
export class ReceitaTotalComponent {
  dataInicio: string = '';
  dataFim: string = '';
  receitaTotal: number = 0;

  constructor(private aluguelService: AluguelService) {}

  calcularReceita(): void {
    this.aluguelService
      .calcularReceitaTotal(this.dataInicio, this.dataFim)
      .subscribe(
        (result) => {
          this.receitaTotal = result.receita_total;
        },
        (error) => {
          console.error('Erro ao calcular a receita total:', error);
          // Trate o erro conforme necessário, como exibir uma mensagem para o usuário
        }
      );
  }
}
