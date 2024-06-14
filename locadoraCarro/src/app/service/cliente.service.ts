import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, forkJoin, map, of, switchMap } from 'rxjs';
import { Cliente } from '../models/clientes.model';
import { Locacao } from '../models/locacao.model';
import { Carro } from '../models/carro.model';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor(private http: HttpClient) {}

  public isLoggedIn = false;
  public clienteLogado: Cliente | null = null;

  private apiUrl = 'http://localhost:3000/cliente';
  private alugueisUrl = 'http://localhost:3000/locacao';
  private carroURL = 'http://localhost:3000/carro'; // URL base da sua API

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  cadastrarCliente(cliente: Cliente): Observable<any> {
    return this.http.post<any>(this.apiUrl, cliente);
  }

  loginCliente(
    email_cliente: string,
    senha_cliente: string
  ): Observable<boolean> {
    return this.getClientes().pipe(
      map((clientes: Cliente[]) => {
        const cliente = clientes.find(
          (cliente) =>
            cliente.email_cliente === email_cliente &&
            cliente.senha_cliente === senha_cliente
        );
        this.isLoggedIn = !!cliente;
        this.clienteLogado = cliente || null;
        return this.isLoggedIn;
      }),
      catchError((error) => {
        console.error('Erro ao obter cliente:', error);
        return of(false);
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

  logoutCliente(): void {
    this.isLoggedIn = false;
    this.clienteLogado = null;
  }

  isAuthenticaded(): boolean {
    return this.isLoggedIn;
  }

  getClienteLogadoId(): number | null {
    return this.clienteLogado?.id_cliente ?? null;
  }

  getAlugueisClienteLogado(): Observable<Locacao[]> {
    const idCliente = this.clienteLogado?.id_cliente || 0; // Obtém o ID do cliente logado
    return this.http.get<Locacao[]>(
      `${this.alugueisUrl}?id_cliente=${idCliente}`
    );
  }

  getCarroById(id_carro: number): Observable<Carro> {
    return this.http.get<Carro>(`${this.carroURL}/${id_carro}`);
  }

  updateAluguel(id_locacao: number, aluguel: Locacao): Observable<Locacao> {
    return this.http.put<Locacao>(`${this.alugueisUrl}/${id_locacao}`, aluguel);
  }

  getAluguelById(id_locacao: number): Observable<Locacao> {
    return this.http.get<Locacao>(`${this.alugueisUrl}/${id_locacao}`);
  }

  excluirAluguel(id_locacao: number): Observable<Locacao> {
    return this.http.delete<Locacao>(`${this.alugueisUrl}/${id_locacao}`);
  }
  updateDisponibilidadeCarro(
    id_carro: number,
    disponibilidade_carro: boolean
  ): Observable<Carro> {
    return this.http.patch<Carro>(`${this.carroURL}/${id_carro}`, {
      disponibilidade_carro,
    });
  }

  editarAluguel(aluguel: Locacao): Observable<Locacao> {
    return this.http.put<Locacao>(
      `${this.alugueisUrl}/${aluguel.id_locacao}`,
      aluguel
    );
  }

  getClientesComCarrosAlugados(): Observable<
    { cliente: Cliente; carro: Carro }[]
  > {
    return this.http.get<{ cliente: Cliente; carro: Carro }[]>(
      `${this.apiUrl}/aluguel`
    );
  }

  getClienteMaisAlugou(): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiUrl}/cliente-mais-alugou`);
  }

  getClientesMaisDeUmAluguel(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.apiUrl}/clientes-mais-de-um-aluguel`);
  }
}
