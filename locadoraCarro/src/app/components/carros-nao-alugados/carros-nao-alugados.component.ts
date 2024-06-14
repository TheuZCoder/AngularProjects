import { Component, OnInit } from '@angular/core';
import { Carro } from 'src/app/models/carro.model';
import { AluguelService } from 'src/app/service/aluguel.service';


@Component({
  selector: 'app-carros-nao-alugados',
  templateUrl: './carros-nao-alugados.component.html',
  styleUrls: ['./carros-nao-alugados.component.css'],
})
export class CarrosNaoAlugadosComponent implements OnInit {
  carrosNaoAlugados: Carro[] = [];

  constructor(private alugueService: AluguelService) {}

  ngOnInit(): void {
    this.alugueService.getCarrosNaoAlugados().subscribe(
      (carros) => {
        this.carrosNaoAlugados = carros;
      },
      (error) => {
        console.error('Erro ao buscar carros não alugados:', error);
      }
    );
  }
}
