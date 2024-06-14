import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, switchMap } from 'rxjs';
import { Funcionario } from '../models/funcionario.model';

@Injectable({
  providedIn: 'root',
})
export class FuncionarioService {
  constructor(private http: HttpClient) {}

  public isLoggedIn = false;
  public funcionarioLogado: Funcionario | null = null;
  private apiUrl = 'http://localhost:3000/funcionario';

  getFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.apiUrl);
  }

  loginFuncionario(
    email_funcionario: string,
    senha_funcionario: string
  ): Observable<boolean> {
    return this.getFuncionarios().pipe(
      map((funcionarios: Funcionario[]) => {
        const funcionario = funcionarios.find(
          (funcionario) =>
            funcionario.email_funcionario === email_funcionario &&
            funcionario.senha_funcionario === senha_funcionario
        );
        this.isLoggedIn = !!funcionario;
        this.funcionarioLogado = funcionario || null;
        return this.isLoggedIn;
      }),
      catchError((error) => {
        console.error('Erro ao obter funcionario:', error);
        return of(false);
      }),
      switchMap((loggedIn) => {
        if (loggedIn) {
          return this.getFuncionarioLogado().pipe(
            map((funcionario: Funcionario | null) => {
              // Aqui você pode fazer o que precisar com o funcionario logado
              console.log('funcionario logado:', funcionario);
              return true; // Retorna true para indicar login bem-sucedido
            })
          );
        } else {
          return of(false); // Retorna false se o login falhar
        }
      })
    );
  }

  getFuncionarioLogado(): Observable<Funcionario | null> {
    return of(this.funcionarioLogado); // Retorna o cliente logado diretamente
  }

  logoutFuncionario(): void {
    this.isLoggedIn = false;
    this.funcionarioLogado = null;
  }

  isAuthenticaded(): boolean {
    return this.isLoggedIn;
  }
}
