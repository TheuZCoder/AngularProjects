import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Atendente } from '../model/atendente.model';

@Injectable({
  providedIn: 'root'
})
export class LoginFuncionarioService {

  constructor(private http: HttpClient) { }


  private apiUrl = 'http://localhost:3000/loginFunc';
  public isLoggedIn = false;


  getUsers(): Observable<Atendente[]> {
    return this.http.get<Atendente[]>(this.apiUrl);
  }


  loginUser(nome_atendente: string, senha_atendente: string): Observable<boolean> {
    return this.getUsers().pipe(
      map((users: Atendente[]) => {
        const user = users.find(u => u.nome_atendente === nome_atendente && u.senha_atendente === senha_atendente);
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
