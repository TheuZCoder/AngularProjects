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


  constructor(private carroService: CarroService) {}

  ngOnInit(): void {
    this.carroService.getCarros().subscribe(carros => {
      this.carros = carros;
      this.carrosAll = carros;
    });
  }

  adicionarCarro(){

  }

}
