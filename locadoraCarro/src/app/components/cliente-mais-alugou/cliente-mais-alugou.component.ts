import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/clientes.model';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente-mais-alugou',
  templateUrl: './cliente-mais-alugou.component.html',
  styleUrls: ['./cliente-mais-alugou.component.css'],
})
export class ClienteMaisAlugouComponent implements OnInit {
  clienteMaisAlugou: Cliente | null = null;

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService.getClienteMaisAlugou().subscribe(
      (cliente) => {
        this.clienteMaisAlugou = cliente;
      },
      (error) => {
        console.error('Erro ao buscar cliente que mais alugou:', error);
      }
    );
  }
}
