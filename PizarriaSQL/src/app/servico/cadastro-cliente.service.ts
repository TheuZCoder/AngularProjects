import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroClienteService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000/cadastroCliente';

  cadastrarCliente(cliente: Cliente): Observable<any> {
    return this.http.post<any>(this.apiUrl, cliente);
  }
}
