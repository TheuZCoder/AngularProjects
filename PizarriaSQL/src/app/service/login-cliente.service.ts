import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente.model';
import { Observable, catchError, map, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginClienteService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:3000/loginCliente';
  public isLoggedIn = false;
  public clienteLogado: Cliente | null = null; // Adicionando a propriedade clienteLogado

  getUsers(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  loginUser(nome_cliente: string, senha_cliente: string): Observable<boolean> {
    return this.getUsers().pipe(
      map((users: Cliente[]) => {
        const user = users.find(
          (u) =>
            u.nome_cliente === nome_cliente && u.senha_cliente === senha_cliente
        );
        this.isLoggedIn = !!user;
        this.clienteLogado = user || null; // Definindo o cliente logado
        return this.isLoggedIn;
      }),
      catchError((error) => {
        console.error('Erro ao obter usuários:', error);
        return of(false); // Retorna false em caso de erro
      }),
      switchMap((loggedIn) => {
        if (loggedIn) {
          return this.getClienteLogado().pipe(
            map((cliente: Cliente | null) => {
              // Aqui você pode fazer o que precisar com o cliente logado
              console.log('Cliente logado:', cliente);
              return true; // Retorna true para indicar login bem-sucedido
            })
          );
        } else {
          return of(false); // Retorna false se o login falhar
        }
      })
    );
  }

  getClienteLogado(): Observable<Cliente | null> {
    return of(this.clienteLogado); // Retorna o cliente logado diretamente
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  logoutUser(): void {
    this.isLoggedIn = false; // Define isAuthenticated como false ao fazer logout
    this.clienteLogado = null; // Limpa o cliente logado ao fazer logout
  }
}
