import { Component } from '@angular/core';
import { LoginFuncionarioService } from 'src/app/servico/login-funcionario-service.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  standalone: true,
  imports: [
    FormsModule
  ],
  selector: 'app-login-funcionario',
  templateUrl: './login-funcionario.component.html',
  styleUrls: ['./login-funcionario.component.css']
})
export class LoginFuncionarioComponent {
  nome_atendente: string = '';
  senha_atendente: string = '';
  errorMessage: string = '';

  constructor(private LoginFuncionarioService: LoginFuncionarioService, private router: Router) { }

  Login(): void {
    this.LoginFuncionarioService.loginUser(this.nome_atendente, this.senha_atendente)
      .subscribe((autenticado: boolean) => {
        if (autenticado) {
          console.log('Usuário autenticado.');
          this.router.navigateByUrl('cadastroPizzas');

        } else {
          // Tratar erro de autenticação, exibindo uma mensagem de erro
          console.log('Credenciais inválidas.');
          alert("CRENDENCIAIS INVALIDA!!!")
        }
      });
  }
}
