import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente.model';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginClienteService {

  constructor(private http: HttpClient) { }


  private apiUrl = 'http://localhost:3000/loginCliente';

  public isLoggedIn = false;

  
  getUsers(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  loginUser(nome_cliente: string, senha_cliente: string): Observable<boolean> {
    return this.getUsers().pipe(
      map((users: Cliente[]) => {
        const user = users.find(u => u.nome_cliente === nome_cliente && u.senha_cliente === senha_cliente);
        this.isLoggedIn = !!user;
        return this.isLoggedIn;
      }),
      catchError(error => {
        console.error('Erro ao obter usuários:', error);
        return of(false); // Retorna false em caso de erro
      })
    );
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  logoutUser(): void {
    this.isLoggedIn = false; // Define isAuthenticated como false ao fazer logout
  }
  
}
