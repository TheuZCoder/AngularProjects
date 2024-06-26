import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private clienteService: ClienteService,private router: Router) {}

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

  editarAluguel(aluguel: Locacao): void {
    this.router.navigate(['editar-aluguel', aluguel.id_locacao]);
  }

  excluirCarro(aluguel: Locacao): void {
    this.clienteService
      .updateDisponibilidadeCarro(aluguel.id_carro, true)
      .subscribe(
        () => {
          console.log('Disponibilidade do carro atualizada com sucesso.');
        },
        (error) => {
          console.error('Erro ao atualizar disponibilidade do carro:', error);
        }
      );
    this.clienteService.excluirAluguel(aluguel.id_locacao).subscribe(
      () => {
        // Remova o carro da lista de aluguéis do cliente
        this.alugueisDoCliente = this.alugueisDoCliente.filter(
          (a) => a !== aluguel
        );
        console.log('Carro excluído com sucesso.');
      },
      (error) => {
        console.error('Erro ao excluir carro:', error);
      }
    );
  }
}
