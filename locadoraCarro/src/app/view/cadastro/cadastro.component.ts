import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/clientes.model';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) {}

  cliente: Cliente = new Cliente(0, '', '', '', '', '', '', '');

  cadastroCliente() {
    if (
      this.cliente.nome_cliente &&
      this.cliente.endereco_cliente &&
      this.cliente.cidade_cliente &&
      this.cliente.estado_cliente &&
      this.cliente.celular_cliente &&
      this.cliente.email_cliente &&
      this.cliente.senha_cliente
    ) {
      this.clienteService.cadastrarCliente(this.cliente).subscribe(
        () => {
          this.router.navigate(['login']);
        },
        (error) => {
          console.error('erro ao cadastrar cliente', error);
          alert('Erro ao cadastrar cliente');
        }
      );
    }
  }
}
