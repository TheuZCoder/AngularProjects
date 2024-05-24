import { Component, OnInit } from '@angular/core';
import { Carro } from 'src/app/models/carro.model';
import { CarroService } from 'src/app/service/carro.service';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit{
  carros: Carro[] = [];
  carrosAll: Carro[] = [];
  mostrarDisponiveis: boolean = false;

  constructor(private carroService: CarroService) {}

  ngOnInit(): void {
    this.carroService.getCarros().subscribe(carros => {
      this.carros = carros;
      this.carrosAll = carros;
    });
  }

  adicionarCarro(){

  }

  toggleDisponiveis() {
    this.mostrarDisponiveis = !this.mostrarDisponiveis;
    if (this.mostrarDisponiveis) {
      this.carros = this.carrosAll.filter(carro => carro.disponibilidade_carro === true);
    } else {
      this.carros = this.carrosAll;
    }
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.carros = this.carrosAll.filter(Carro =>
      Carro.modelo_carro.toLowerCase().includes(value)
    );
  }
}
