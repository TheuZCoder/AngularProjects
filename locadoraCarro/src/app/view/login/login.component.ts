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
  email : string = '';
  senha : string = '';

constructor (
  private clienteService: ClienteService,
  private router: Router
){}

loginCliente() {
  if (this.email && this.senha) {
    this.clienteService.loginCliente(this.email, this.senha).subscribe(
      (response) => {
        if (response.success) {
          localStorage.setItem('authToken', response.token);
          this.router.navigate(['home']);
        } else {
          alert('Login falhou');
        }
      },
      (error) => {
        console.error('Erro ao fazer login', error);
        alert('Erro ao fazer login');
      }
    );
  } else{
    Swal.fire({
      icon: 'error',
      title: 'Erro ao logar',
      text: 'Preencha todos os campos'
    });
  }
}


}
