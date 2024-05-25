import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Carro } from 'src/app/models/carro.model';
import { Locacao } from 'src/app/models/locacao.model';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-meus-alugueis',
  templateUrl: './meus-alugueis.component.html',
  styleUrls: ['./meus-alugueis.component.css'],
})
export class MeusAlugueisComponent implements OnInit {
  alugueisDoCliente: Locacao[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.buscarAlugueisDoClienteLogado();
  }

  buscarAlugueisDoClienteLogado(): void {
    this.clienteService.getAlugueisClienteLogado().subscribe(
      (alugueis: Locacao[]) => {
        // Filtra apenas os aluguéis do cliente logado
        this.alugueisDoCliente = alugueis.filter(
          (aluguel) =>
            aluguel.id_cliente === this.clienteService.clienteLogado?.id_cliente
        );
        console.log('Aluguéis do cliente logado:', this.alugueisDoCliente);

        // Chamada para buscar informações dos carros
        this.buscarInformacoesCarros();
      },
      (error) => {
        console.error('Erro ao buscar aluguéis:', error);
        // Tratar o erro conforme necessário
      }
    );
  }

  buscarInformacoesCarros(): void {
    this.alugueisDoCliente.forEach((aluguel) => {
      this.clienteService.getCarroById(aluguel.id_carro).subscribe(
        (carros: Carro) => {
          if (carros && carros) {
            const carro = carros; // Supondo que apenas um carro é retornado
            aluguel.nome_carro = carro.modelo_carro;
            aluguel.ano_carro = carro.ano_carro;
          } else {
            console.error(
              'Nenhum carro encontrado para o ID:',
              aluguel.id_carro
            );
          }
        },
        (error) => {
          console.error('Erro ao buscar informações do carro:', error);
          // Tratar o erro conforme necessário
        }
      );
    });
  }
}
