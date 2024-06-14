import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionarioService } from 'src/app/service/funcionario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-funcionario',
  templateUrl: './login-funcionario.component.html',
  styleUrls: ['./login-funcionario.component.css'],
})
export class LoginFuncionarioComponent {
  email_funcionario: string = '';
  senha_funcionario: string = '';

  constructor(private funcionarioService: FuncionarioService, private router: Router) {}

  loginFuncionario() {
    if (this.email_funcionario && this.senha_funcionario) {
      this.funcionarioService
        .loginFuncionario(this.email_funcionario, this.senha_funcionario)
        .subscribe((autenticado: boolean) => {
          if (autenticado) {
            this.router.navigate(['funcionario']);
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Erro ao logar',
              text: 'Email ou senha incorretos',
            });
          }
        });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Erro ao logar',
        text: 'Preencha todos os campos',
      });
    }
  }
}
