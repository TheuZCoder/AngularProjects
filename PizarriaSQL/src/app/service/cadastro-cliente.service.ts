import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CadastroClienteService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://api-node-sigma.vercel.app/cadastroCliente';

  cadastrarCliente(cliente: Cliente): Observable<any> {
    return this.http.post<any>(this.apiUrl, cliente);
  }
}
