import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente.model';
import { CadastroClienteService } from 'src/app/service/cadastro-cliente.service';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css'],
})
export class ClienteCadastroComponent {
  cliente: Cliente = new Cliente(0, '', '', '', '', '');
  cep: string = '';

  constructor(
    private clienteService: CadastroClienteService,
    private router: Router,
    private http: HttpClient
  ) {}

  cadastroCliente(): void {
    if (
      this.cliente.nome_cliente &&
      this.cliente.email_cliente &&
      this.cliente.endereco_cliente &&
      this.cliente.telefone_cliente &&
      this.cliente.senha_cliente
    ) {
      this.clienteService.cadastrarCliente(this.cliente).subscribe(
        () => {
          this.router.navigate(['loginCliente']);
        },
        (error) => {
          console.error('Erro ao cadastrar cliente:', error);
          alert('Erro ao cadastrar cliente. Por favor, tente novamente.');
        }
      );
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }

  buscarEnderecoPorCEP(): void {
    if (this.cep.length === 8) {
      this.http
        .get<any>(`https://viacep.com.br/ws/${this.cep}/json/`)
        .subscribe(
          (data) => {
            this.cliente.endereco_cliente = `${data.logradouro}, ${data.bairro}`;
          },
          (error) => {
            console.error('Erro ao buscar endereço:', error);
            alert(
              'Erro ao buscar endereço. Por favor, verifique o CEP e tente novamente.'
            );
          }
        );
    }
  }
}

