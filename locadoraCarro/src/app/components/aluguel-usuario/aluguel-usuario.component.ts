import { Component, OnInit } from '@angular/core';
import { Carro } from 'src/app/models/carro.model';
import { Cliente } from 'src/app/models/clientes.model';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-aluguel-usuario',
  templateUrl: './aluguel-usuario.component.html',
  styleUrls: ['./aluguel-usuario.component.css'],
})
export class AluguelUsuarioComponent implements OnInit {
  clientesComCarros: { cliente: Cliente; carro: Carro }[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService.getClientesComCarrosAlugados().subscribe(
      (dados) => {
        this.clientesComCarros = dados;
      },
      (error) => {
        console.error('Erro ao buscar clientes com carros alugados:', error);
      }
    );
  }
}
