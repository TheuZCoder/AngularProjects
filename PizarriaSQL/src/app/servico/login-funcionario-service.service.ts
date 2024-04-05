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




  getUsers(): Observable<Atendente[]> {
    return this.http.get<Atendente[]>(this.apiUrl);
  }


  loginUser(nome_atendente: string, senha_atendente: string): Observable<boolean> {
    return this.getUsers().pipe(
      map((users: Atendente[]) => {
        const user = users.find(u => u.nome_atendente === nome_atendente && u.senha_atendente === senha_atendente);
        return user !== undefined; // Retorna true se as credenciais forem válidas, senão retorna false
      }),
      catchError(error => {
        console.error('Erro ao obter usuários:', error);
        return of(false); // Retorna false em caso de erro
      })
    );
  }


}