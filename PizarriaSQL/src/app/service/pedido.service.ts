import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../model/pedido.model';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  private baseUrl = 'http://localhost:3000/pedidos';

  constructor(private http: HttpClient) {}

  adicionarPedido(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(`${this.baseUrl}/cliente_pedido`, pedido);
  }

  getPedidosClientes(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.baseUrl}/cliente_pedido`);
  }
}
