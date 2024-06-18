import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Carro } from 'src/app/models/carro.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { AluguelService } from 'src/app/service/aluguel.service';
import { ClienteService } from 'src/app/service/cliente.service';
import { Locacao } from 'src/app/models/locacao.model';
import Swal from 'sweetalert2';
import { CarrosComponent } from 'src/app/view/carros/carros.component';

@Component({
  selector: 'app-aluguel-painel',
  templateUrl: './aluguel-painel.component.html',
  styleUrls: ['./aluguel-painel.component.css'],
})
export class AluguelPainelComponent implements OnInit {
  @Input() carro: Carro | null = null;
  @Output() aluguelCriado = new EventEmitter<void>();
  dias: number = 1;
  dataLocacao: Date = new Date(); // Inicializando com a data atual
  dataEntrega: Date = new Date(); // Inicializando com a data atual

  bsConfig: Partial<BsDatepickerConfig>;

  constructor(
    private aluguelService: AluguelService,
    private clienteService: ClienteService,
    private carrosComponents: CarrosComponent
  ) {
    this.bsConfig = Object.assign(
      {},
      {
        containerClass: 'theme-blue',
        dateInputFormat: 'DD/MM/YYYY',
        showWeekNumbers: false,
        isAnimated: true,
        adaptivePosition: true,
      }
    );
  }

  ngOnInit(): void {}

  alugarCarro(): void {
    const idUsuario = this.clienteService.getClienteLogadoId() || 0;
    const precoTotal = this.calcularPrecoTotal();

    const novaLocacao = new Locacao(
      0,
      this.dataLocacao,
      precoTotal,
      this.dataEntrega,
      idUsuario,
      this.carro?.id_carro || 0
    );
    if (this.dataLocacao < this.dataEntrega) {
      this.aluguelService
        .cadastrarLocacao(novaLocacao)
        .subscribe((response) => {
          Swal.fire('Aluguel registrado com sucesso!', '', 'success');
          console.log('Aluguel registrado com sucesso:', response);
          this.aluguelCriado.emit(); // Emite o evento
          this.fecharPainel();
        });
    } else {
      Swal.fire(
        'Erro ao registrar aluguel',
        'Data de locação não pode ser maior ou igual a data de entrega!',
        'error'
      );
    }
  }

  calcularNumeroDias(): number {
    const diffTime = this.dataEntrega.getTime() - this.dataLocacao.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  }

  calcularPrecoTotal(): number {
    const numeroDias = this.calcularNumeroDias();
    const valorPorDia = this.carro?.preco_carro || 0; // Valor padrão caso o carro seja null
    return valorPorDia * numeroDias;
  }

  fecharPainel(): void {
    this.carro = null;
    this.carrosComponents.loadCarros();
  }
}
