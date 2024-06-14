import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/clientes.model';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-clientes-mais-aluguel',
  templateUrl: './clientes-mais-aluguel.component.html',
  styleUrls: ['./clientes-mais-aluguel.component.css'],
})
export class ClientesMaisAluguelComponent implements OnInit {
  clientesMaisAluguel: Cliente[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService.getClientesMaisDeUmAluguel().subscribe(
      (clientes) => {
        this.clientesMaisAluguel = clientes;
      },
      (error) => {
        console.error('Erro ao buscar clientes com mais de um aluguel:', error);
      }
    );
  }
}
