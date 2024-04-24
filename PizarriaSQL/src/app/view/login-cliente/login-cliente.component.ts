import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginClienteService } from 'src/app/service/login-cliente.service';

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css']
})
export class LoginClienteComponent {

  nome_cliente: string = '';
  senha_cliente: string = '';
  errorMessage: string = '';

  constructor(private LoginClienteService: LoginClienteService, private router: Router) { }

  Login(): void {
    this.LoginClienteService.loginUser(this.nome_cliente, this.senha_cliente)
      .subscribe((autenticado: boolean) => {
        if (autenticado) {
          console.log('Usuário autenticado.');
          this.router.navigateByUrl('compraProduto');

        } else {
          // Tratar erro de autenticação, exibindo uma mensagem de erro
          console.log('Credenciais inválidas.');
          alert("CRENDENCIAIS INVALIDA!!!")
        }
      });
  }

}
