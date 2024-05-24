import { Component, Input, OnInit } from '@angular/core';
import { Carro } from 'src/app/models/carro.model';

@Component({
  selector: 'app-aluguel-painel',
  templateUrl: './aluguel-painel.component.html',
  styleUrls: ['./aluguel-painel.component.css']
})
export class AluguelPainelComponent implements OnInit{
  @Input() carro: Carro | null = null;
  dias: number = 1;

  constructor() {}

  ngOnInit(): void {}

  calcularPrecoTotal(): number {
    return this.carro ? this.carro.preco_carro * this.dias : 0;
  }

  alugarCarro(): void {
    console.log(`Carro ${this.carro?.modelo_carro} alugado por ${this.dias} dias`);
    this.fecharPainel();
  }

  fecharPainel(): void {
    this.carro = null;
  }
}
