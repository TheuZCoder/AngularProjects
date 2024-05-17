import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/clientes.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:3000/clientes';

 cadastrarCliente(cliente: Cliente): Observable<any> {
   return this.http.post<any>(this.apiUrl, cliente);
 }
}
