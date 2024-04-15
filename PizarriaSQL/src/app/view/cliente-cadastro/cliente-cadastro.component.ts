import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente.model';
import { CadastroClienteService } from 'src/app/servico/cadastro-cliente.service';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})
export class ClienteCadastroComponent {
  cliente: Cliente = new Cliente(0,'','','','',''); 

  constructor(private clienteService: CadastroClienteService,private router: Router,) {}

  cadastroCliente(): void {
    if (this.cliente.nome_cliente && this.cliente.email_cliente && this.cliente.endereco_cliente && this.cliente.telefone_cliente && this.cliente.senha_cliente) {
      console.log(this.cliente)
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
}

