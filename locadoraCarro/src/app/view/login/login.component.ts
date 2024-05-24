import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/clientes.model';
import { ClienteService } from 'src/app/service/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email_cliente : string = '';
  senha_cliente : string = '';

constructor (
  private clienteService: ClienteService,
  private router: Router
){}

loginCliente() {
  if (this.email_cliente && this.senha_cliente) {
    this.clienteService.loginCliente(this.email_cliente, this.senha_cliente)
      .subscribe((autenticado: boolean) => {
        if (autenticado) {
          this.router.navigate(['carrosDisponiveis']);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Erro ao logar',
            text: 'Email ou senha incorretos'
          });
        }

      });
  } else{
    Swal.fire({
      icon: 'error',
      title: 'Erro ao logar',
      text: 'Preencha todos os campos'
    });
  }
}


}
